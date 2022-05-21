### RAWG JS API SDK

[API Docs](https://api.rawg.io/docs/)

[Get your key here](https://rawg.io/apidocs)

## Only listing of games endpoint implemented yet

## Usage

```ts
import { RawgClient } from 'rawg-api-sdk';

const client = new RawgClient('<YOUR API KEY>');

const games = await client.games.list();
```

Or

```ts
import { RawgGamesClient } from 'rawg-api-sdk';

const gamesClient = new RawgGamesClient('<YOUR API KEY>');

const games = await gamesClient.list();
```
