export interface PaginatedData<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: Record<string, unknown>;
  nofollow_collections: string[];
}

export interface PageParams {
  page?: number;
  page_size?: number;
}

export interface SearchParams {
  search?: string;
  search_precise?: boolean;
  search_exact?: boolean;
}
