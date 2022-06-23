import { client, checkError } from './client';

export async function getGames(from = 0, to = 15) {
  const response = await client.from('games').select('*', { count: 'exact' }).range(from, to);

  return checkError(response);
}