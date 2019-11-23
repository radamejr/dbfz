import React, { Component } from 'react';
import { characterAPI } from './../helpers/urlFor';
import axios from 'axios';

class Character extends Component {
    constructor () {
      super();
      this.state = {
        character: ''
      }
    }

    componentDidMount() {
      const { match: { params } } = this.props
      console.log(params.id)

      axios.get(characterAPI(params.id))
      .then((res) => this.setState({character: res.data}))
      .catch((err) => console.log(err.response.data));
      
    }

    render() { 
        
        
        return ( 
            <div className="container">
              
            </div>
            
        );
    }
}
 
export default Character;