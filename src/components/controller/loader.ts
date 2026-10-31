
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface LoaderOptions {
  [key: string]: string;
}

interface RequestConfig {
  endpoint: string;
  options?: LoaderOptions;
}

type ResponseCallback<T> = (data: T) => void;

class Loader {
  private baseLink: string;
  private options: LoaderOptions;

  constructor(baseLink: string, options: LoaderOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp<T>(
    { endpoint, options = {} }: RequestConfig,
    callback: ResponseCallback<T> = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load<T>('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`,
        );
      }

      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: LoaderOptions, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load<T>(
    method: RequestMethod,
    endpoint: string,
    callback: ResponseCallback<T>,
    options: LoaderOptions = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json() as Promise<T>)
      .then((data) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
