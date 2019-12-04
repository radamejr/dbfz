import React, { Component } from 'react';
import { characterNormals } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import AddNormal from './Modal/AddNormal';

class Normals extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            normals: [],
            isOpen: false
        }
    }

    toggleModal = () => {
        let { isOpen } = this.state
        this.setState({isOpen: !isOpen})
    }

    componentDidMount = () => {
        
        this.setState({ normals: [], params: this.props.params.id});
        this.getNormals();      
        
    }    

    componentDidUpdate(prevProps) {
        
        if (prevProps.params.id !== this.props.params.id) {
            this.setState({ normals: [], params: this.props.params.id});     
            this.getNormals();
            
        }
        
    }
   
    async getNormals () {
        let {  params  } = this.props
        try {
            const response = await axios.get(characterNormals(params.id));
            this.setState({normals: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }
    
    render() { 
        let { normals, isOpen, params } = this.state
        

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

                <button className="btn btn-primary float-right" onClick={this.toggleModal}>Add Normals +</button>

                <Modal 
                    show={isOpen}
                    >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleModal}>cancel</button>
                    </Modal.Header>
                <AddNormal 
                    params={params}
                    />
                    
                </Modal>
                <br></br>
                
            </div>
        );
    }
}
 
export default Normals;