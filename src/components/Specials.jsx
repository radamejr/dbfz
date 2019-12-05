import React, { Component } from 'react';
import { characterSpecials } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import AddSpecial from './Modal/AddSpecial'

class Specials extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            specials: [],
            isOpen: false
        }
    }


    toggleModal = () => {
        let { isOpen } = this.state
        this.setState({isOpen: !isOpen})
    }

    componentDidMount = () => {  
        this.setState({ specials: [], params: this.props.params.id});
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
            response.data.sort((a, b) => a.id - b.id)
            this.setState({specials: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }
    render() { 
        let { specials, isOpen, params } = this.state
        

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
            <div>
                Here are the Specials:
                {currentSpecials}
            </div>
            <button className="btn btn-primary btn-sm float-right" onClick={this.toggleModal}>Add Specials +</button>

            <Modal 
                show={isOpen}
                >
                <Modal.Header>
                    <button className="btn btn-primary float-right" onClick={this.toggleModal}>cancel</button>
                </Modal.Header>
            <AddSpecial 
                params={params}
                />
                
            </Modal>
            <br></br>
        </div>
        );
    }
}
 
export default Specials;