
import AppLoader from './appLoader';
import {
  ApiEndpoint,
  NewsResponse,
  SourcesResponse,
} from '../../types';

class AppController extends AppLoader {
  public getSources(callback: (data: SourcesResponse) => void): void {
    super.getResp<SourcesResponse>(
      { endpoint: ApiEndpoint.Sources },
      callback,
    );
  }

  public getNews(
    e: Event,
    callback: (data: NewsResponse) => void,
  ): void {
    let target = e.target as HTMLElement | null;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target && target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');

        if (
          sourceId &&
          newsContainer.getAttribute('data-source') !== sourceId
        ) {
          newsContainer.setAttribute('data-source', sourceId);

          super.getResp<NewsResponse>(
            {
              endpoint: ApiEndpoint.Everything,
              options: { sources: sourceId },
            },
            callback,
          );
        }

        return;
      }

      target = target.parentElement;
    }
  }
}

export default AppController;
