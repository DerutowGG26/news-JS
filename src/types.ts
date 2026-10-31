
export enum ApiEndpoint {
  Sources = 'sources',
  Everything = 'everything',
}

export interface NewsSource {
  id: string;
  name: string;
}

export interface NewsArticle {
  author: string | null;
  source: Pick<NewsSource, 'name'>;
  urlToImage: string | null;
  publishedAt: string;
  title: string;
  description: string | null;
  url: string;
}

export interface NewsResponse {
  articles: NewsArticle[];
}

export interface SourcesResponse {
  sources: NewsSource[];
}
