export interface Store {
  id: number;
  name: string;
  doomain: string | null;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface StoreDetailed extends Store {
  description: string;
}
