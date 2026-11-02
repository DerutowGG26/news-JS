
export enum ApiEndpoint {
  Sources = 'sources',
  Everything = 'everything',
}

export interface NewsSource {
  id: string;
  name: string;
}

interface NewsArticleRequiredFields {
  source: Pick<NewsSource, 'name'>;
  publishedAt: string;
  title: string;
  url: string;
}

interface NewsArticleOptionalFields {
  author: string | null;
  urlToImage: string | null;
  description: string | null;
}

export type NewsArticle = NewsArticleRequiredFields &
  Partial<NewsArticleOptionalFields>;

export interface NewsResponse {
  articles: NewsArticle[];
}

export interface SourcesResponse {
  sources: ReadonlyArray<Readonly<NewsSource>>;
}
