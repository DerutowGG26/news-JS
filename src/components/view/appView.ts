
import News from './news/news';
import Sources from './sources/sources';

interface NewsResponse {
  articles?: NewsArticle[];
}

interface SourcesResponse {
  sources?: Source[];
}

interface NewsArticle {
  author: string | null;
  source: {
    name: string;
  };
  urlToImage: string | null;
  publishedAt: string;
  title: string;
  description: string | null;
  url: string;
}

interface Source {
  id: string;
  name: string;
}

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: NewsResponse | null): void {
    const values = data?.articles ?? [];
    this.news.draw(values);
  }

  public drawSources(data: SourcesResponse | null): void {
    const values = data?.sources ?? [];
    this.sources.draw(values);
  }
}

export default AppView;
