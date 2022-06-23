import { useEffect, useState } from 'react';
import './App.css';
import { getGames } from './services/fetch-utils';
import GamesList from './GamesList';
import Pagination from './Pagination';

function App() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [totalGames, setTotalGames] = useState(1);
  const perPage = 15;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const daGames = await getGames(from, to);

      setGames(daGames);
      setTotalGames(daGames.count);
    }

    fetch();
  }, [page]);

  const lastPage = Math.floor(totalGames / perPage);

  return (
    <div>
      <h2>Current Page: {page}</h2>
      <Pagination page={page} setPage={setPage} lastPage={lastPage} />
      <GamesList games={games}/>
    </div>
  );
}

export default App;