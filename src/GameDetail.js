import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getGame } from './services/fetch-utils';

export default function GameDetail() {
  const params = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    async function fetch() {
      const data = await getGame(params.Game);

      setGame(data);
    }

    fetch();
  }, [params.Game]);


  return (
    <div>
      <Link to='/'>Home</Link>
      <div className='game-detail'>
        <h1>{game.Game}</h1>
        <h2>Developers: {game.Developers}</h2>
        {
          game.Series === 'N/A' ? <></> : <h3>Series: {game.Series}</h3>
        }
        <h4>Release Date: {game.Release_date}</h4>
        <h5>Genres: {game.Genres}</h5>
        <h5>Publishers: {game.Publishers}</h5>
        <h6>Copies sold: {game.Total_copies_sold}</h6>
      </div>
    </div>
  );
}
