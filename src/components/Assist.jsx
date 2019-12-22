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
                    <div className="assist-move row">
                        { assist.picture.url ? 
                            <img className="assist col-4" src={assist.picture.url}  alt="assist"></img>
                            :
                            <img className="assist col-4" src='/question.png'  alt="missing"></img>

                        }
                        
                            <div className="col">
                                <br></br>
                                <div  className="float-left">
                                Startup Frames:  {assist.startup}
                                </div>
                                <br></br>
                                <div  className="float-left">
                                Active Frames:  {assist.active}
                                </div>
                                <br></br>    
                            </div>                            
                        <br></br>          
                        <br></br>
                    </div>   
                    {this.props.user && this.props.user.admin ? <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Assist</button> : null}
                    <br></br>
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