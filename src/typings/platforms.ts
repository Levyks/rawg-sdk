export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  year_end: number | null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface PlatformDetailed extends Platform {
  description: string;
}

export interface ParentPlataform {
  id: number;
  name: string;
  slug: string;
}
