import React, { Component } from 'react';
import { characterNormals } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import AddNormal from './Modal/AddNormal';
import EditNormal from './Modal/EditNormal';


class Normals extends Component {
    constructor () {
        super();
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
                        <div className="row mt-1">
                            { normal.picture.url ? 
                                <div className="col-4 d-none d-sm-block">
                                    <img className="normal img-fluid" src={normal.picture.url}  alt="normal"></img>
                                </div>
                                :
                                <div className="col-4 d-none d-sm-block">
                                    <img className="normal img-fluid" src='/question.png'  alt="missing"></img>
                                </div>
                            }
                                          
                            <div className="col">
                                <div className="row">
                                    <div className="col my-lg-4 my-md-3">
                                        <div className="">
                                            Input: 
                                            <br></br>
                                            {normal.input}
                                        </div>
                                    </div>
                                    <div className="col my-lg-4 my-md-3">
                                        <div className="">
                                            Startup Frames:  
                                            <br></br>
                                            {normal.startup}
                                        </div>
                                    </div>
                                    <div className="col my-lg-4 my-md-3">
                                        <div className="">
                                            Active Frames:  
                                            <br></br>
                                            {normal.active}
                                        </div>
                                    </div>  
                                    <div className="w-100">
                                    </div>
                                    <div className="col my-lg-4 my-md-3">
                                        <div className="">
                                            Recovery Frames: 
                                            <br></br>
                                            {normal.recovery}
                                        </div>
                                    </div>
                                    <div className="col my-lg-4 my-md-3">
                                        <div className="">
                                            Advantage Frames: 
                                            <br></br>
                                            {normal.advantage}
                                        </div>
                                    </div>
                                    <div className="col my-lg-4 my-md-3">
                                        <div className="">
                                            Gaurd: 
                                            <br></br>
                                            {normal.gaurd}
                                        </div>
                                    </div>
                                    <div className="w-100">
                                    </div>
                                    <div className="col">
                                        <div className="text-left">
                                            Notes: {normal.special_notes}
                                        </div>
                                    </div>
                                </div>     
                            </div>
                        </div>
                        <br></br>
                        <div className="row col mb-2 ">                               
                            {this.props.user && this.props.user.admin ? 
                            <div className="float-right col">
                                <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Normal</button> 
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
                {currentNormals}
                
                <br></br>   
                <br></br>   
                {this.props.user && this.props.user.admin ? <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Normals +</button> : null}
                

                <Modal 
                    show={addModalOpen}
                    >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleAddModal}>cancel</button>
                    </Modal.Header>
                    <AddNormal 
                        
                        params={params}
                        />
                    
                </Modal>

                <Modal 
                    show={editModalOpen}
                    >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleEditModal}>cancel</button>
                    </Modal.Header>
                    <EditNormal 
                        params={params}
                        props={normals[normal_index]}
                        />
                    
                </Modal>           
            </div>
        );
    }
}
 
export default Normals;