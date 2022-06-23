import './App.css';
import GamesPage from './GamesPage';
import GameDetail from './GameDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <NavLink exact activeClassName='active-link' to='/'>To list page</NavLink>
        <Switch>
          <Route exact path="/">
            <GamesPage />
          </Route>
          <Route exact path="/game/:Game">
            <GameDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
