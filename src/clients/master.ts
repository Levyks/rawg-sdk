import RawgGamesClient from './games';

export default class RawgClient {
  public games: RawgGamesClient;

  constructor(API_KEY: string) {
    this.games = new RawgGamesClient(API_KEY);
  }
}
