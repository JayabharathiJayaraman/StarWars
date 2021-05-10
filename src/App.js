import starwarsLogo from './logo.jpg';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import People from './components/People';
import Footer from './components/Footer';
import Home from './components/Home';
import axios from 'axios';
import Search from './components/Search';
import peopleImg from './Image/people.jpg';
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      people: [],
      isLoaded: false,
      searchField: '',
    };
  }

  componentDidMount() {
    this.fetchPeople();
  }

  fetchPeople() {
    const { page, people } = this.state;
    return axios.get(`https://swapi.dev/api/people/?page=${page}&format=json`)
      .then((response) => {
        console.log('Response', response.data.results);
        this.setState({
          isLoaded: true,
          people: ([...people, ...response.data.results]),
          page: page + 1
        })
      })
  }

  render() {
    const { people, isLoaded, searchField } = this.state;
    const filteredPeoples = people.filter(people => (
      people.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    if (!isLoaded) {
      return <div>Loading..</div>;
    }
    else {
      const fetchPeople = () => {
        const { page, people } = this.state;
        if (page <= 9) {
          return axios.get(`https://swapi.dev/api/people/?page=${page}&format=json`)
            .then((response) => {
              console.log('Response', response.data.results);
              this.setState({
                isLoaded: true,
                people: ([...people, ...response.data.results]),
                page: page + 1
              })
            })
        }
      }
      return (
        <>
          <div><br/>
            <img className='starwarsLogo' src={starwarsLogo} />
            <Router>
              <NavBar/>
              <Switch>
                <Route exact path='/'>
                  <Home/>
                </Route>
                <div className='star'>
                  <Route exact path='/people'>
                    <div className='peopleImg'>
                      <img className='peopleImg' src={peopleImg} />
                    </div>
                    <h1>People</h1>
                    <InfiniteScroll dataLength={this.state.people.length}
                      next={fetchPeople}
                      hasMore={true}>
                      <Search placeholder="SearchPeople" handleChange={(e) => this.setState({ searchField: e.target.value })}></Search>
                      <People people={filteredPeoples} />
                    </InfiniteScroll>
                  </Route>
                </div>
              </Switch>
              <Footer/>
            </Router>
          </div>
        </>
      );
    }
  }
}

export default App;
