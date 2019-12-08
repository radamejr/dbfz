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
                    <div className="normal-move row">
                        <img className="normal col-4" src={normal.picture.url}  alt="normal"></img>
                            <div className="col">
                                <div className="float-left">
                                Input: {normal.input}
                                </div>
                                <br></br>
                                <div  className="float-left">
                                Startup Frames:  {normal.startup}
                                </div>
                                <br></br>
                                <div  className="float-left">
                                Active Frames:  {normal.active}
                                </div>
                                <br></br>


                                
                            </div>
                            
                        <br></br>          
                        
                    </div>   
                    <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Normal</button> 
                </div>
            );
        });

        
        return (  
            <div>
                <div>
                    Here are the Normals:
                    {currentNormals}
                </div>
                <br></br>   
                <br></br>   
                <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Normals +</button>

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
                <br></br>
                
            </div>
        );
    }
}
 
export default Normals;