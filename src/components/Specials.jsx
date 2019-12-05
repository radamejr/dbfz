import React, { Component } from 'react';
import { characterSpecials } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import AddSpecial from './Modal/AddSpecial'
import EditSpecial from './Modal/EditSpecial';

class Specials extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            specials: [],
            addModalOpen: false,
            editModalOpen: false,
            special_index: ''
        }
    }


    toggleAddModal = () => {
        let { addModalOpen } = this.state
        this.setState({addModalOpen: !addModalOpen})
    }

    toggleEditModal = () => {
        let { editModalOpen } = this.state
        this.setState({editModalOpen: !editModalOpen})
    }

    editButtonClicked = (id) => {
        
        this.setState({special_index: id})
        this.toggleEditModal()
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
        let { specials, addModalOpen, editModalOpen, params, special_index } = this.state
        

        const currentSpecials = specials.map((special, index) => {
            return(
                <div key={index}>
                    <p className="special">
                        {special.name}
                        <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Special</button>
                        <br></br>
                        {special.input}                       
                    </p> 
                </div>

            );
            
        });

        return (  
        <div>   
            <div>
                Here are the Specials:
                {currentSpecials}
            </div>
            <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Specials +</button>

            <Modal 
                show={addModalOpen}
                >
                <Modal.Header>
                    <button className="btn btn-primary float-right" onClick={this.toggleAddModal}>cancel</button>
                </Modal.Header>
                <AddSpecial 
                params={params}
                />
                
            </Modal>

            <Modal 
                show={editModalOpen}
                >
                <Modal.Header>
                    <button className="btn btn-primary float-right" onClick={this.toggleEditModal}>cancel</button>
                </Modal.Header>
                <EditSpecial 
                params={params}
                props={specials[special_index]}
                />
                
            </Modal>
            <br></br>
        </div>
        );
    }
}
 
export default Specials;