import React, { Component } from 'react';
import { characterSupers } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import AddSuper from './Modal/AddSuper'
import EditSuper from './Modal/EditSuper'

class Supers extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            supers: [],
            addModalOpen: false,
            editModalOpen: false,
            super_index: ''
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
        
        this.setState({super_index: id})
        this.toggleEditModal()
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
            response.data.sort((a, b) => a.id - b.id)
            this.setState({supers: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }

    render() { 
        let { supers, addModalOpen, editModalOpen, params, super_index } = this.state
       

        const currentSupers = supers.map((superMove, index) => {
            return(
               <div key={index}>
                  <div className="super-move row">
                  { superMove.picture.url ? 
                            <img className="super col-4" src={superMove.picture.url}  alt="super"></img>
                            :
                            <img className="super col-4" src='/question.png'  alt="missing"></img>

                        }
                        
                            <div className="col">
                                <div className="float-left">
                                Name: {superMove.name}
                                </div>
                                <br></br>
                                <div  className="float-left">
                                Input Frames:  {superMove.input}
                                </div>
                                <br></br>
                                <div  className="float-left">
                                Active Frames:  {superMove.active}
                                </div>
                                <br></br>
                            </div>                            
                        <br></br>          
                    </div>
                    {this.props.user && this.props.user.admin ? <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Supers +</button> : null}
                    <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Super</button> 
               </div>

            );
            
        });

        return (  
        <div>
            <div>
                Here are the Supers:
                {currentSupers}
            </div>
            <br></br>
            <br></br>
            {this.props.user && this.props.user.admin ? <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Supers +</button> : null}
            

            <Modal 
                show={addModalOpen}
                >
                <Modal.Header>
                    <button className="btn btn-primary float-right" onClick={this.toggleAddModal}>cancel</button>
                </Modal.Header>
                <AddSuper 
                    params={params}
                />
                
            </Modal>


            <Modal 
                show={editModalOpen}
                >
                <Modal.Header>
                    <button className="btn btn-primary float-right" onClick={this.toggleEditModal}>cancel</button>
                </Modal.Header>
                <EditSuper 
                    params={params}
                    props={supers[super_index]}
                />
                
            </Modal>
            <br></br>
        </div>
        );
    }
}
 
export default Supers;