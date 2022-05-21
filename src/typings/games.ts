import { Genre } from './genres';
import { PageParams, SearchParams } from './misc';
import { ParentPlataform, Platform } from './platforms';
import { Store } from './stores';
import { Tag } from './tags';

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: string;
}

export type AddStatus =
  | 'yet'
  | 'owned'
  | 'beaten'
  | 'toplay'
  | 'dropped'
  | 'playing';

export interface Requirements {
  minimum: string;
  recommended: string;
}

export interface GamePlatformEntry {
  platform: Platform;
  released_at: string;
  requirements_en: Requirements | null;
  requirements_ru: Requirements | null;
}

export interface GameParentPlatformEntry {
  platform: ParentPlataform;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

interface ListGame_ {
  id: number;
  slug: string;
  name: string;
  tba: boolean;
  background_image: string;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: Record<AddStatus, number>;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: GamePlatformEntry[];
  parent_platforms: GameParentPlatformEntry[];
  genres: Genre[];
  stores: Store[];
  tags: Tag[];
  esrb_rating: EsrbRating | null;
  short_screenshots: ShortScreenshot[];
}

export interface ListGameRaw extends ListGame_ {
  released: string;
  updated: string;
}

export interface ListGame extends ListGame_ {
  released: Date;
  updated: Date;
}

export type ListGamesParams = PageParams &
  SearchParams & {
    parent_platforms?: string;
    platforms?: string;
    stores?: string;
    developers?: string;
    publishers?: string;
    genres?: string;
    tags?: string;
    creators?: string;
    dates?: string;
    updated?: string;
    platforms_count?: number;
    metacritic?: string;
    exclude_collection?: number;
    exclude_additions?: boolean;
    exclude_parents?: boolean;
    exclude_game_series?: boolean;
    exclude_stores?: string;
    ordering?: string;
  };
