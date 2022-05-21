export interface Tag {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  language: string;
}

export interface TagDetailed extends Tag {
  description: string;
}
