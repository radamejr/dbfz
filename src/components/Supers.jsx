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

    deleteButtonClick = (id) => {

        this.deleteSuper(id)
    }

     deleteSuper = (id) => {
        let {  params  } = this.props
        
        axios.delete(characterSupers(params.id, id), {withCredentials: true})
        .then((result) => {
            window.location.reload(false);
        });
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
                        <div className="row mt-1 justify-content-center">
                            { superMove.picture.url ? 
                                <div className="super col-4 d-none d-sm-block">
                                    <img className="super img-fluid" src={superMove.picture.url}  alt="super"></img>
    
                                </div>
                                 :
                                <div className="super col-4 d-none d-sm-block">
                                    <img className="super img-fluid" src='/question.png'  alt="missing"></img>
                                </div>
                            }
                        </div>
                        <div className="col">
                            <div className="row mt-1 text-left">
                                <div className="col">
                                    <div className="row mx-md-3 mx-lg-5">
                                        <div className="col my-md-3">
                                            <div className="">
                                                Name: {superMove.name}
                                            </div>
                                        </div>
                                        <div className="col my-md-3">
                                            <div className="">
                                                Input: {superMove.input}
                                            </div>
                                        </div>
                                        <div className="col my-md-3">
                                            <div className="">
                                                Startup: {superMove.startup}
                                            </div>
                                        </div>
                                        <div className="w-100">
                                        </div>
                                        <div className="col my-md-3">
                                            <div className="">
                                                Recovery: {superMove.recovery}
                                            </div>
                                        </div>
                                        <div className="col my-md-3">
                                            <div className="">
                                                Advantage: {superMove.advantage}
                                            </div>
                                        </div>                                    
                                        <div className="col my-md-3">
                                            <div className="">
                                                Immunity: {superMove.immune_to}
                                            </div>
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col-4 my-md-3">
                                            <div className="">
                                                Gaurd: {superMove.gaurd}
                                            </div>
                                        </div>
                                        <div className="col-4 my-md-3">
                                            <div className="">
                                                Meter: {superMove.meter_used}
                                            </div>
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col my-md-3"> 
                                            <div className="text-left notes-box">
                                                Notes: {superMove.special_notes}
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>  
                        </div>
                        <div className="row col mb-2">
                            {this.props.user && this.props.user.admin ? 
                                <div className="float-right col">
                                    <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Super</button> 
                                    <button className="btn btn-danger btn-sm float-left" onClick={ (event) => window.confirm("Are you sure you want to delete that?") && this.deleteButtonClick(superMove.id)}>Delete Super</button>  
                                </div>
                            : null} 
                        </div>                               
                    </div>
               </div>

            );
            
        });

        return (  
        <div>
            
            {this.props.user && this.props.user.admin 
            ?
            <div>
                <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Supers +</button>
                <br></br>
                <br></br>
            </div>
            :
             null}
            
            {currentSupers}
            <Modal 
                show={addModalOpen}
                size="lg"
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
                size="lg"
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