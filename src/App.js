import React, { Component } from 'react';
import './App.css';
import {characterAPI, charactersAPI } from './helpers/urlFor';
import axios from 'axios';
import List from './components/List'

class App extends Component {
  constructor () {
    super();
    this.state = {
      characters: [],
      character: {},
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
        <List characters={characters} />
      </div>
    );
  }
};
 
export default App;

