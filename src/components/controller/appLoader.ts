import Loader from './loader';

declare const process: { env: { API_URL: string } };

class AppLoader extends Loader {
  constructor() {
    super(process.env.API_URL as string, {});
  }
}

export default AppLoader;