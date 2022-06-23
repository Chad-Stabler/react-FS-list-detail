import { Link } from 'react-router-dom';

export default function Game({ Game, Release_date, Total_copies_sold }) {
  return (<Link to={`/game/${Game}`}>
    <div className='game'>
      <h2>{Game}</h2>
      <p>Release date: {Release_date}</p>
      <p>Copies sold: {Total_copies_sold}</p>
    </div>
  </Link>);
}