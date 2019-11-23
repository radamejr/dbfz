import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { charactersAPI } from './helpers/urlFor';
import axios from 'axios';
import List from './components/List';
import Nav from './components/Nav';
import Home from './components/Home';
import Character from './components/Character'


class App extends Component {
  constructor () {
    super();
    this.state = {
      characters: [],
      error: ''
  };
}
  componentDidMount = () => {
    axios.get(charactersAPI())
    .then((res) => this.setState({characters: res.data}))
    .catch((err) => console.log(err.response.data));
  }

  render() { 
    const { characters } = this.state;

    return (  
      <div className="App">
        <Nav characters={characters} />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/characters' render={props => (<List {...props} characters={this.state.characters}/>)}  />
          <Route path='/characters/:id' render={props => (<Character {...props} characters={this.state.characters}/>)} />
        </Switch>
      </div>
    );
  }
};
 
export default App;

