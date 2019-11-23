import React, { Component } from 'react';
import { characterAPI } from './../helpers/urlFor';
import axios from 'axios';

class Character extends Component {
    constructor () {
      super();
      this.state = {
        character: {}
      }
    }
    
    reloadCharacter = () => {
        this.setState(this.state);
    }
    
    componentDidUpdate(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.setState({ character: {}});
            this.getCharacter(this.props.match.params.id);
            
        }
    }

    componentDidMount = () => {
        this.getCharacter();
    }

    getCharacter = () => {
        let { match: { params } } = this.props;
        
        axios.get(characterAPI(params.id))
        .then((res) => this.setState({character: res.data}))
        .catch((err) => console.log(err.response.data));
    }

    render() { 
        let { character } = this.state;      
        
        return ( 
            <div className="container">
              {character.name}
            </div>
            
        );
    }
}
 
export default Character;