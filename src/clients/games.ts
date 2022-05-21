import RawgBaseClient from './base';
import { PaginatedData } from '../typings/misc';
import { ListGame, ListGameRaw, ListGamesParams } from '../typings/games';
import { stringToDate } from '../helpers';

export default class RawgGamesClient extends RawgBaseClient {
  async list(params?: ListGamesParams): Promise<PaginatedData<ListGame>> {
    const page = await this.get<PaginatedData<ListGameRaw>>('games', params);

    return {
      ...page,
      results: page.results.map<ListGame>((game) => ({
        ...game,
        released: stringToDate(game.released),
        updated: stringToDate(game.updated),
      })),
    };
  }
}
