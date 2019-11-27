import React, { Component } from 'react';
import { characterSupers } from '../helpers/urlFor';
import axios from 'axios';

class Supers extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            supers: []
        }

    }
    componentDidMount = () => {
        this.getSupers();             
    }    

    componentDidUpdate(prevProps) {       
        if (prevProps.params.id !== this.props.params.id) {
            this.setState({ supers: [], params: this.props.params.id});     
            this.getSupers();           
        }       
    }

    async getSupers() {
        let { params } = this.props
        try {
            const response = await axios.get(characterSupers(params.id));
            this.setState({supers: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }

    render() { 
        let { supers } = this.state
       

        const currentSupers = supers.map((superMove, index) => {
            return(
                <p className="super" key={index}>
                    {superMove.name}
                    <br></br>
                    {superMove.input}
                    
                    
                </p> 

            );
            
        });

        return (  
            <div>
            Here are the Supers:
            {currentSupers}
        </div>
        );
    }
}
 
export default Supers;