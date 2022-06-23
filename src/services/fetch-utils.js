import { client, checkError } from './client';

export async function getGames(from = 0, to = 10) {
  const response = await client.from('games').select('*').range(from, to);

  return checkError(response);
}

export async function getGame(Game) {
  const response = await client.from('games').select().match({ Game }).single();

  return checkError(response);
}