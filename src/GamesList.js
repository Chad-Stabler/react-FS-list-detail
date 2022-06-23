import Game from './Game';

export default function GamesList({ games }) {
  return (<div className='games'>
    {
      games.map((game, i) => <Game
        key={game.Game + game.Series + game.Total_copies_sold + game.Release_date + i}
        {...game}/>)
    }
  </div>);
}