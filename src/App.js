import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { charactersAPI } from './helpers/urlFor';
import axios from 'axios';
import List from './components/List';
import Nav from './components/Nav';
import Home from './components/Home';
import SignIn from './components/Authentication/SignIn'
import Register from './components/Authentication/Registration'
import Character from './components/Character'


class App extends Component {
  constructor () {
    super();
    this.state = {
      characters: [],
      character: {},
  };
}
  componentDidMount = () => {    
    this.getCharacters()       
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
    const { characters } = this.state;
    
    return (  
      <div className="App">
        <Nav characters={characters} />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/characters/:id' render={props => (<Character {...props} characters={this.state.characters} character={this.state.character} />)} />
          <Route path='/characters' render={props => (<List {...props} characters={this.state.characters}/>)}  />
          <Route exact path='/login' component={SignIn} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </div>
    );
  }
};
 
export default App;

