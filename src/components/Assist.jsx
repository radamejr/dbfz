import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { characterAssists } from '../helpers/urlFor'
import AddAssist from './Modal/AddAssist'
import EditAssist from './Modal/EditAssist'


class Assist extends Component {
    constructor () {
        super();
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
                        <div className="row mt-1">
                            { assist.picture.url ? 
                                <div className="assist col-4 d-none d-sm-block">
                                    <img className="assist img-fluid" src={assist.picture.url}  alt="assist"></img>
                                </div>
                                :
                                <div className="assist col-4 d-none d-sm-block">
                                    <img className="assist img-fluid" src='/question.png'  alt="missing"></img>
                                </div>
                            }
                            
                            <div className="col text-left">
                                <div className="row">
                                    <div className="col my-md-3">
                                        <div  className="float-left">
                                            Startup Frames:  
                                            <br></br>
                                            {assist.startup}
                                        </div>  
                                    </div>
                                    <div className="col my-md-3">
                                        <div  className="float-left">
                                            Blockstun Frames:  
                                            <br></br>
                                            {assist.blockstun}
                                        </div>  
                                    </div>
                                    <div className="col my-md-3">
                                        <div  className="float-left">
                                            Active Frames:  
                                            <br></br>
                                            {assist.active}
                                        </div>  
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col my-md-3">
                                        <div  className="float-left">
                                            OnScreen Frames:  
                                            <br></br>
                                            {assist.onscreen}
                                        </div>  
                                    </div>
                                    <div className="col my-md-3">
                                        <div  className="float-left">
                                            Hitstop on Block Frames:  
                                            <br></br>
                                            {assist.hitstop_block}
                                        </div>  
                                    </div>
                                    <div className="col my-md-3">
                                        <div  className="float-left">
                                            Hitstop on Hit Frames:  
                                            <br></br>
                                            {assist.hitstop_hit}
                                        </div>  
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col my-md-3">
                                        <div  className="float-left">
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
                        </div>
                        : 
                        null}                            
                    </div>   
           
                </div>
                
            );
            
        });

        return ( 
<div>
                {currentAssists}
                <br></br>
                <br></br>
                {this.props.user && this.props.user.admin ? <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Assist +</button> : null}
                
                <Modal 
                    show={addModalOpen}
                    >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleAddModal}>cancel</button>
                    </Modal.Header>
                    <AddAssist 
                        
                        params={params}
                        />
                    
                </Modal>

                <Modal 
                    show={editModalOpen}
                    >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleEditModal}>cancel</button>
                    </Modal.Header>
                    <EditAssist 
                        params={params}
                        props={assists[assist_index]}
                        />
                    
                </Modal>
                <br></br>
                
            </div>
         );
    }
}
 
export default Assist;