import { useEffect, useState } from 'react';
import './App.css';
import { getGames } from './services/fetch-utils';
import GamesList from './GamesList';
import Pagination from './Pagination';

function App() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
//   const [totalGames, setTotalGames] = useState(1);
  const perPage = 15;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage ;
      const to = page * perPage - 1;
      const daGames = await getGames(from, to);

      setGames(daGames);
    }

    fetch();
  }, [page]);

  return (
    <div>
      <h2>Current Page: {page}</h2>
      <Pagination page={page} setPage={setPage} />
      <GamesList games={games}/>
    </div>
  );
}

export default App;