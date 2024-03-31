export interface Article {
  id: number;
  source_url: string;
  short_text: string;
  full_text: string;
}

export interface Digest {
  id: number;
  title: string;
  publication_date: string;
  articles: Article[];
}
