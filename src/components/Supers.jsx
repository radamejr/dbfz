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
                    <div className="super-move container">
                        <div className="row mt-1">
                            { superMove.picture.url ? 
                                <div className="super col-4 d-none d-sm-block">
                                    <img className="super img-fluid" src={superMove.picture.url}  alt="super"></img>
    
                                </div>
                                 :
                                <div className="super col-4 d-none d-sm-block">
                                    <img className="super img-fluid" src='/question.png'  alt="missing"></img>
                                </div>
                            }
    
                            <div className="col text-left">
                                <div className="row">
                                    <div className="col my-md-3">
                                        <div className="">
                                            Name: 
                                            <br></br>
                                            {superMove.name}
                                        </div>
                                    </div>
                                    <div className="col my-md-3">
                                        <div className="">
                                            Input: 
                                            <br></br>
                                            {superMove.input}
                                        </div>
                                    </div>
                                    <div className="col my-md-3">
                                        <div className="">
                                            Startup: 
                                            <br></br>
                                            {superMove.startup}
                                        </div>
                                    </div>
                                    <div className="w-100">
                                    </div>
                                    <div className="col my-md-3">
                                        <div className="">
                                            Recovery: 
                                            <br></br>
                                            {superMove.recovery}
                                        </div>
                                    </div>
                                    <div className="col my-md-3">
                                        <div className="">
                                            Advantage: 
                                            <br></br>
                                            {superMove.advantage}
                                        </div>
                                    </div>                                    
                                    <div className="col my-md-3">
                                        <div className="">
                                            Immunity: 
                                            <br></br>
                                            {superMove.immune_to}
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-4 my-md-3">
                                        <div className="">
                                            Gaurd: 
                                            <br></br>
                                            {superMove.gaurd}
                                        </div>
                                    </div>
                                    <div className="col-4 my-md-3">
                                        <div className="">
                                            Meter: 
                                            <br></br>
                                            {superMove.meter_used}
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col my-md-3">
                                        <div className="text-left">
                                            Notes: {superMove.special_notes}
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>  
                        <div className="row col mb-2">
                            {this.props.user && this.props.user.admin ? 
                                <div className="float-right col">
                                    <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Super</button> 
                                </div>
                            : null} 
                        </div>                               
                    </div>
               </div>

            );
            
        });

        return (  
        <div>
            {currentSupers}

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