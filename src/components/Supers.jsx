import React, { Component } from 'react';
import { characterSupers } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import SuperVariants from './SuperVariants'
import AddSuper from './Modal/AddSuper'
import EditSuper from './Modal/EditSuper'

class Supers extends Component {
    constructor () {
        super();
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.getSupers = this.getSupers.bind(this);
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
                        <div className="row ml-3">
                            <div className="col-sm-6">
                                <h4 className="">
                                    <u>Move Name: {superMove.name}</u>
                                </h4>
                            </div>
                            <div className="col-sm-6">
                                <h4 className="">
                                    <u>Input: {superMove.input}</u>
                                </h4>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="mt-1 col-5 d-none d-sm-block">
                                { superMove.picture.url ? 
                                    <div className="super">
                                        <img className="super img-fluid" src={superMove.picture.url}  alt="super"></img>
        
                                    </div>
                                     :
                                    <div className="super">
                                        <img className="super img-fluid" src='/question.png'  alt="missing"></img>
                                    </div>
                                }
                            </div>
                                                
                            <div className="col-sm">
                                <div className="row text-left">
                                    <div className="col-sm-4">
                                        <p className="">
                                            First Active:    {superMove.startup}
                                        </p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="">
                                            Active:  {superMove.active}
                                        </p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="">
                                            Recovery:    {superMove.recovery}
                                        </p>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                        
                                <div className="row text-left">  
                                    <div className="col-sm-4">
                                        <p className="">
                                            Advantage:   {superMove.advantage}
                                        </p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="">
                                            Gaurd:   {superMove.gaurd}
                                        </p>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                        
                                <div className="row text-left">  
                                    <div className="col-sm-4">
                                        <p className="">
                                            Raw Damage:   {superMove.raw_damage}
                                        </p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="">
                                            Scaled Damage:   {superMove.scaled_damage}
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="text-left col-sm">
                                <p className="notes-box">
                                    Notes: 
                                </p>
                                <p className="notes-box">
                                    {superMove.special_notes}
                                </p>
                            </div> 
                        </div>

                        <div className="row col mb-2">
                            {this.props.user && this.props.user.admin ? 
                                <div className="float-right col">
                                    <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Super</button> 
                                    <button className="btn btn-danger btn-sm float-left" onClick={ (event) => window.confirm("Are you sure you want to delete that?") && this.deleteButtonClick(superMove.id)}>Delete Super</button>  
                                </div>
                            : null} 
                            <br></br>
                            <br></br>
                        </div>  
                    <SuperVariants 
                    params={this.props.params}
                    super_id={superMove.id}
                    user={this.props.user}
                    />                             
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
                    getSupers={this.getSupers}
                    toggleAddModal={this.toggleAddModal}
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
                    getSupers={this.getSupers}
                    toggleEditModal={this.toggleEditModal}
                />
                
            </Modal>
            <br></br>
        </div>
        );
    }
}
 
export default Supers;