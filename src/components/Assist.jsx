import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { characterAssists } from '../helpers/urlFor'
import AddAssist from './Modal/AddAssist'
import EditAssist from './Modal/EditAssist'


class Assist extends Component {
    constructor () {
        super();
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.getAssists = this.getAssists.bind(this);
        this.state = {
            params: '',
            assists: [],
            editModalOpen: false,
            addModalOpen: false,
            assist_index: ''
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
        
        this.setState({assist_index: id})
        
        this.toggleEditModal()
    }
    
    deleteButtonClick = (id) => {
        this.deleteAssist(id)
    }

     deleteAssist = (id) => {
        let {  params  } = this.props
        
        axios.delete(characterAssists(params.id, id), {withCredentials: true})
        .then((result) => {
            window.location.reload(false);
        });
    }

    componentDidMount = () => {
        
        this.setState({ assists: [], params: this.props.params});
        this.getAssists();      
        
    }    

    componentDidUpdate(prevProps) {
        
        if (prevProps.params.id !== this.props.params.id) {
            this.setState({ assists: [], params: this.props.params});     
            this.getAssists();
            
        }
        
    }
   
    async getAssists () {
        let {  params  } = this.props

        try {
            const response = await axios.get(characterAssists(params.id));
            response.data.sort((a, b) => a.id - b.id)
            this.setState({assists: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }
    

    render() { 
        let { assist_index, assists, editModalOpen, addModalOpen, params } = this.state

        const currentAssists = assists.map((assist, index) => {
            return(
                <div key={index}>
                    <div className="assist-move container">
                        <div className="row mt-1 justify-content-center">
                            { assist.picture.url ? 
                                <div className="assist col-4 d-none d-sm-block">
                                    <img className="assist img-fluid" src={assist.picture.url}  alt="assist"></img>
                                </div>
                                :
                                <div className="assist col-4 d-none d-sm-block">
                                    <img className="assist img-fluid" src='/question.png'  alt="missing"></img>
                                </div>
                            }
                        </div>
                        <div className="row mt-1 text-left">    
                            <div className="col">
                                <div className="row mx-md-3">
                                    <div className="col my-md-3">
                                        <div  className="">
                                            First Active: {assist.startup}
                                        </div>  
                                    </div>
                                    <div className="col my-md-3">
                                        <div  className="">
                                            Blockstun Frames: {assist.blockstun}
                                        </div>  
                                    </div>
                                    <div className="col my-md-3">
                                        <div  className="">
                                            Active Frames: {assist.active}
                                        </div>  
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col my-md-3">
                                        <div  className="">
                                            OnScreen Frames: {assist.onscreen}
                                        </div>  
                                    </div>
                                    <div className="col my-md-3">
                                        <div  className="">
                                            Hitstop on Block;Hit: {assist.hitstop_block}
                                        </div>  
                                    </div>
                                    <div className="col my-md-3">
                                        <div  className="">
                                            Hitstun: {assist.hit_stun}
                                        </div>  
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col my-md-3">
                                        <div  className="text-left notes-box">
                                            Notes: 
                                            <br></br>
                                            {assist.special_notes}
                                        </div>  
                                    </div>
                                </div>              
                            </div>
                             
                        </div>
                        {this.props.user && this.props.user.admin 
                        ? 
                        <div className="float-right col">
                            <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Assist</button> 
                            <button className="btn btn-danger btn-sm float-left" onClick={ (event) => window.confirm("Are you sure you want to delete that?") && this.deleteButtonClick(assist.id)}>Delete Assist</button>  
                        </div>
                        : 
                        null}
                        <br></br>   
                        <br></br>      
                    </div>   
           
                </div>
                
            );
            
        });

        return ( 
<div>
                
                {this.props.user && this.props.user.admin 
                ?
                <div>
                    <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Assist</button>
                    <br></br>
                    <br></br>
                </div>
                :
                null}
                {currentAssists}
                <Modal 
                    show={addModalOpen}
                    size="lg"
                    >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleAddModal}>cancel</button>
                    </Modal.Header>
                    <AddAssist 
                        params={params}
                        getAssists={this.getAssists}
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
                    <EditAssist 
                        params={params}
                        props={assists[assist_index]}
                        getAssists={this.getAssists}
                        toggleEditModal={this.toggleEditModal}
                        />
                    
                </Modal>
                <br></br>
                
            </div>
         );
    }
}
 
export default Assist;