import React, { Component } from 'react';
import { characterAPI } from './../helpers/urlFor';
import axios from 'axios';
import Normals from './Normals';
import Specials from './Specials';
import Supers from './Supers';

class Character extends Component {
    constructor () {
      super();
      this.state = {
        character: {}
      }
    }
    
        
    componentDidUpdate(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.setState({ character: {}});
            this.getCharacter();
            
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
        let { match: { params } } = this.props;     
        
        return ( 
            <div className="container">
              {character.name}

              <div className="normal-container">
                <Normals 
                    params={params}
                />
                <br></br>
                <Specials
                    params={params}
                />
                <br></br>
                <Supers
                    params={params}
                />
              </div>
            </div>
            

        );
    }
}
 
export default Character;