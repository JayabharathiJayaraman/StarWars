import starwarsLogo from './logo.jpg';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState, Component} from 'react';
import NavBar from './components/NavBar';
import People from './components/People';
import Footer from './components/Footer';
import Home from './components/Home';
import axios from 'axios';
import Search from './components/Search';
import peopleImg from './Image/people.jpg';
import InfiniteScroll from 'react-infinite-scroll-component';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      people:[],
      isLoaded: false,
      searchField:'',
    };  
  }

  componentDidMount(){
    this.fetchPeople();
  }
  fetchPeople(){
    const{page,people} = this.state;
    return axios.get(`https://swapi.dev/api/people/?page=${page}&format=json`)
    .then((response) => {
      console.log('Response', response.data.results);    
      this.setState({
        isLoaded: true,
        people: ([...people, ...response.data.results]),
        page:page+1})
        
    }) 
  }
  render(){
    const{people,isLoaded,searchField} = this.state;
    const filteredPeoples = people.filter(people => (
      people.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    if(!isLoaded){
      return <div>Loading..</div>;
  }
  else {
   const  fetchPeople = ()=>{
      const{page,people} = this.state;
      if (page<=9){
      return axios.get(`https://swapi.dev/api/people/?page=${page}&format=json`)
      .then((response) => {
        console.log('Response', response.data.results);    
        this.setState({
          isLoaded: true,
          people: ([...people, ...response.data.results]),
          page:page+1})
      }) 
    }
    }
    return(
<>
    <div><br/>
    <img className='starwarsLogo' src={starwarsLogo}/>
    <Router>
    <NavBar/>
    <Switch>
    <Route exact path = '/'>
      <Home></Home>
      </Route>
      <div className='star'>
      <Route exact path = '/people'>
      <div className = 'peopleImg'>
        <img className='peopleImg' src={peopleImg} />
    </div>
    <h1>People</h1>
     
     <InfiniteScroll dataLength={this.state.people.length} next={fetchPeople} hasMore={true}   
     endMessage={
       <p style={{ textAlign: 'center' }}>
       <b>Yay! You have seen it all</b>
       </p>
     }>
        <Search placeholder="SearchPeople" handleChange={(e) => this.setState({searchField:e.target.value})}></Search>
      <People people = {filteredPeoples}/>
      </InfiniteScroll> 
      </Route>
      </div>
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
