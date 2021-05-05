import starwarsLogo from './logo.jpg';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState, Component} from 'react';
import NavBar from './components/NavBar';
import People from './components/People';
import Footer from './components/Footer';
import Home from './components/Home';
import axios from 'axios';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      people:[],
      isLoaded: false,
    }
    this.fetchPeople = this.fetchPeople.bind(this);
  }
  fetchPeople(){
    return axios.get('https://swapi.dev/api/people/?format=json')
    .then((response) => {
      console.log('Response', response.data.results);    
      this.setState({
        isLoaded: true,
        people: response.data.results})
    }) 
  }
  componentDidMount(){
    this.fetchPeople();
  }
  render(){
    const{people,isLoaded} = this.state;
    if(!isLoaded){
      return <div>Loading..</div>;
  }
  else {
    return(
<>
    <div><br></br>
    <img className='starwarsLogo' src={starwarsLogo}/><br></br>
    <Router>
    <NavBar/>
    <Switch>
    <Route exact path = '/'>
      <Home></Home>
      </Route>
      <Route exact path = '/people'>
      <People people = {people}/>
      </Route>
        </Switch>
        <Footer></Footer>
        </Router>
        </div>
        </>
    );
  }
}
}
    
/*function App() {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState([true])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

    useEffect( () => {
      async function fetchPeople(){
        const response= await fetch('https://swapi.dev/api/people/?format=json');
        setLoading(true);
        const data = await response.json();
        setPeople(data.results);
        setLoading(false);
      };
      fetchPeople();  
    }, []);
    console.log('People', people);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
  return (
    <>
    <div><br></br>
    <img className='starwarsLogo' src={starwarsLogo}/><br></br>
    <Router>
    <NavBar/>
    <Switch>
    <Route exact path = '/'>
      <Home></Home>
      </Route>
      <Route exact path = '/people'>
      <People data = {currentPosts} loading={loading}/>
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={people.length}
        paginate={paginate}></Pagination>
      </Route>
        </Switch>
        <Footer></Footer>
        </Router>
        </div>
        </>
  );
}*/

export default App;
