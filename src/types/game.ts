export interface Game {
  name: string;
  url: string;
}

export interface GamesListResponse {
  count: number;
  results: Game[];
  next?: string;
  previous?: string;
}
