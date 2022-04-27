import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CharacterList from './views/Characters/List'; 
import CharacterDetail from './views/Characters/Detail';
export default function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/characters">
    //       <CharacterList />
    //     </Route>
    //     <Route path="/">
    //       <p>Home Page</p>
    //       <Link to="/characters">View List</Link>
    //     </Route>
    //     <Route path='/characters/:name'>
    //       <CharacterDetail />
    //     </Route>
    //   </Switch>
    // </Router>
    
    <CharacterList />
  );
}
