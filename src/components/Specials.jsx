import React, { Component } from 'react';
import { characterSpecials } from '../helpers/urlFor';
import axios from 'axios';

class Specials extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            specials: []
        }
    }

    componentDidMount = () => {
    
        this.getSpecials();      
        
    }    

    componentDidUpdate(prevProps) {
        
        if (prevProps.params.id !== this.props.params.id) {
            this.setState({ specials: [], params: this.props.params.id});     
            this.getSpecials();
            
        }
        
    }
   
    async getSpecials() {
        let { params } = this.props
        try {
            const response = await axios.get(characterSpecials(params.id));
            this.setState({specials: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }
    render() { 
        let { specials } = this.state
        

        const currentSpecials = specials.map((special, index) => {
            return(
                <p className="special" key={index}>
                    {special.name}
                    <br></br>
                    {special.input}
                    
                    
                </p> 

            );
            
        });

        return (  
        <div>
            Here are the Specials:
            {currentSpecials}
        </div>
        );
    }
}
 
export default Specials;