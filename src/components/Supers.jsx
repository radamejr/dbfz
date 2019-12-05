import React, { Component } from 'react';
import { characterSupers } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import AddSuper from './Modal/AddSuper'

class Supers extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            supers: [],
            usOpen: false
        }

    }

    toggleModal = () => {
        let { isOpen } = this.state
        this.setState({isOpen: !isOpen})
    }

    componentDidMount = () => {

        this.setState({ supers: [], params: this.props.params.id}); 
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
        let { supers, isOpen, params } = this.state
       

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
            <div>
                Here are the Supers:
                {currentSupers}
            </div>
            <button className="btn btn-primary float-right" onClick={this.toggleModal}>Add Supers +</button>

            <Modal 
                show={isOpen}
                >
                <Modal.Header>
                    <button className="btn btn-primary float-right" onClick={this.toggleModal}>cancel</button>
                </Modal.Header>
            <AddSuper 
                params={params}
                />
                
            </Modal>
            <br></br>
        </div>
        );
    }
}
 
export default Supers;