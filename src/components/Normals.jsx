import React, { Component } from 'react';
import { characterNormals } from '../helpers/urlFor';
import axios from 'axios';

class Normals extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            normals: []
        }
    }

    componentDidMount = () => {
    
        this.getNormals();      
        
    }    

    componentDidUpdate(prevProps) {
        
        if (prevProps.params.id !== this.props.params.id) {
            this.setState({ normals: [], params: this.props.params.id});     
            this.getNormals();
            
        }
        
    }
   
    async getNormals () {
        let { params } = this.props
        try {
            const response = await axios.get(characterNormals(params.id));
            this.setState({normals: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }
    
    render() { 
        let { normals } = this.state
        
        const currentNormals = normals.map((normal, index) => {
            return(
                <p className="normal" key={index}>
                    {normal.input}                 
                </p> 
            );
        });

        return (  
            <div>
                <div>
                    Here are the Normals:
                    {currentNormals}
                </div>
            </div>
        );
    }
}
 
export default Normals;