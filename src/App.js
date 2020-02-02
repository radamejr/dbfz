import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { charactersAPI, auth } from './helpers/urlFor';
import axios from 'axios';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Home from './components/Home';
import SignIn from './components/Authentication/SignIn'
import Register from './components/Authentication/Registration'
import Character from './components/Character'
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound'
import UniversalData from './components/UniversalData';


class App extends Component {
  constructor () {
    super();
    this.state = {
      characters: [],
      character: {},
      isLoggedIn: false,
      user: {}
  };
}

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = (data) => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    axios.get(auth("logged_in"), {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response.data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }


  componentDidMount = () => {    
    this.getCharacters() 
    this.loginStatus()      
  }

  async getCharacters() {

    try {
      const response = await axios.get(charactersAPI());
      response.data.sort((a, b) => a.id - b.id )
      this.setState({characters: response.data})
      } catch (error) {
      console.error(error);
  }
  }

  render() { 
    const { characters, user } = this.state;

    return (  
        <div className="App">         
            <Nav characters={characters} loggedInStatus={this.state.isLoggedIn} user={user} handleLogout={this.handleLogout} />
            
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/characters/:id' render={props => (<Character {...props} characters={this.state.characters} character={this.state.character} user={user} />)} />
              <Route path='/universal' component={UniversalData} />
              <Route exact path='/login' render={props => (<SignIn {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
              <Route exact path='/register' render={props => (<Register {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
              <Route path= '*' component={NotFound} />
            </Switch>
          <br></br>
          <br></br>
          <ScrollToTop />
          <Footer />
        </div>
    ); 
  }
};
 
export default App;

