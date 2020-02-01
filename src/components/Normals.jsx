import React, { Component } from 'react';
import { characterNormals } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import AddNormal from './Modal/AddNormal';
import EditNormal from './Modal/EditNormal';


class Normals extends Component {
    constructor () {
        super();
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.getNormals = this.getNormals.bind(this);
        this.state = {
            params: '',
            normals: [],
            addModalOpen: false,
            editModalOpen: false,
            normal_index: ''
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
        
        this.setState({normal_index: id})
        
        this.toggleEditModal()
    }
    
    deleteButtonClick = (id) => {

        this.deleteNormal(id)
    }

    deleteNormal = (id) => {
        let {  params  } = this.props
        
        axios.delete(characterNormals(params.id, id), {withCredentials: true})
        .then((result) => {
            window.location.reload(false);
        });
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
            response.data.sort((a, b) => a.id - b.id)
            this.setState({normals: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }
    
    render() { 
        let { normals, normal_index, addModalOpen, editModalOpen, params } = this.state
        
        const currentNormals = normals.map((normal, index) => {
            return(
                <div key={index}>
                    <div className="normal-move container">
                        <div className="row mt-1 justify-content-center">
                            { normal.picture.url ? 
                                    <div className="col-6 d-none d-sm-block">
                                        <img className="normal img-fluid" src={normal.picture.url}  alt="normal"></img>
                                    </div>
                                    :
                                    <div className="col-6 d-none d-sm-block">
                                        <img className="normal img-fluid" src='/question.png'  alt="missing"></img>
                                    </div>
                                }
                        </div>

                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    Input: {normal.input}
                                </h4>
                            </div>
                        </div>
                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        First Active:    {normal.startup}
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  {normal.active}
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    {normal.recovery}
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   {normal.advantage}
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Gaurd:   {normal.gaurd}
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                        {normal.special_notes}
                                    </p>
                                </div> 
                            </div>
                        </div>
                        
                        <br></br>
                        <div className="row col mb-2 ">                               
                            {this.props.user && this.props.user.admin ? 
                            <div className="float-right col">
                                <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Normal</button>
                                <button className="btn btn-danger btn-sm float-left" onClick={ (event) => window.confirm("Are you sure you want to delete that?") && this.deleteButtonClick(normal.id)}>Delete Normal</button>  
                            </div>
                            
                            : null} 
                        </div>                               
                    </div>                     
                    <br></br>
                </div>
                
            );
        });

        
        return (  
            <div className="container">
                {this.props.user && this.props.user.admin 
                ?
                <div>
                    <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Normals +</button>
                    <br></br>
                    <br></br>
                </div>
                : null
                }
                
                {currentNormals}
                

                <Modal 
                    show={addModalOpen}
                    size='lg'
                    >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleAddModal}>cancel</button>
                    </Modal.Header>
                    <AddNormal 
                        params={params}
                        getNormals={this.getNormals}
                        toggleAddModal={this.toggleAddModal}
                        />
                    
                </Modal>

                <Modal 
                    show={editModalOpen}
                    size='lg'
                    >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleEditModal}>cancel</button>
                    </Modal.Header>
                    <EditNormal 
                        params={params}
                        props={normals[normal_index]}
                        getNormals={this.getNormals}
                        toggleEditModal={this.toggleEditModal}
                        />
                    
                </Modal>           
            </div>
        );
    }
}
 
export default Normals;