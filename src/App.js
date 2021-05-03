import starwarsLogo from './logo.jpg';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import People from './components/People';
import Footer from './components/Footer';

function App() {
  return (
    <div><br></br>
    <img className='starwarsLogo' src={starwarsLogo}/><br></br>
    <Router>
    <NavBar></NavBar>
    <Switch>
    
      <Route exact path = '/people'>
      <People></People>
        </Route>
        </Switch>
        <Footer></Footer>
        </Router>
        </div>
  );
}

export default App;
