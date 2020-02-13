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
                        <div className="row">
                        <div className="col-5 justify-content-center d-none d-sm-block">
                                { assist.picture.url ? 
                                        <div className="mt-3">
                                            <span className="helper"></span>
                                            <img className="assist img-fluid" src={assist.picture.url}  alt="assist"></img>
                                        </div>
                                        :
                                        <div className="mt-3">
                                            <span className="helper"></span>
                                            <img className="assist img-fluid" src='/question.png'  alt="missing"></img>
                                        </div>
                                    }
                            </div>
                            <div className="col mt-3">                                 
                                <div className="row text-left">
                                    <div className="col-sm">
                                        <p className="">
                                            First Active:    {assist.startup}
                                        </p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="">
                                            Active:  {assist.active}
                                        </p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="">
                                            Onscreen:    {assist.onscreen}
                                        </p>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="row text-left">  
                                    
                                    <div className="col-sm">
                                        <p className="">
                                            Hitstop Block/Hit:   {assist.hitstop}
                                        </p>
                                    </div>

                                    <div className="col-sm">
                                        <p className="">
                                            Hitstun:   {assist.hit_stun}
                                        </p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="">
                                            Blockstun:   {assist.blockstun}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-left">
                            <div className="col-sm">
                                <p className="text-left notes-box">
                                    Notes: 
                                </p>
                                <p className="text-left notes-box">
                                    {assist.special_notes}
                                </p>
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