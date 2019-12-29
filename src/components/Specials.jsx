import React, { Component } from 'react';
import { characterSpecials } from '../helpers/urlFor';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import Variants  from './Variants'
import AddSpecial from './Modal/AddSpecial'
import EditSpecial from './Modal/EditSpecial';

class Specials extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            specials: [],
            addModalOpen: false,
            editModalOpen: false,
            special_index: ''
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
        
        this.setState({special_index: id})
        this.toggleEditModal()
    }

    componentDidMount = () => {  
        this.setState({ specials: [], params: this.props.params.id});
        this.getSpecials();          
    }    

    componentDidUpdate(prevProps) {
        
        if (prevProps.params.id !== this.props.params.id) {
            this.setState({ specials: [], params: this.props.params.id});     
            this.getSpecials();
            
        }
        
    }
    
    deleteButtonClick = (id) => {

        this.deleteSpecial(id)
    }

     deleteSpecial = (id) => {
        let {  params  } = this.props
        
        axios.delete(characterSpecials(params.id, id), {withCredentials: true})
        .then((result) => {
            window.location.reload(false);
        });
    }

    async getSpecials() {
        let { params } = this.props
        try {
            const response = await axios.get(characterSpecials(params.id));
            response.data.sort((a, b) => a.id - b.id)
            this.setState({specials: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }
    render() { 
        let { specials, addModalOpen, editModalOpen, params, special_index } = this.state
        

        const currentSpecials = specials.map((special, index) => {
            return(
                <div key={index}>
                    <div className="special-move container">
                        <div className="row mt-1 justify-content-center">
                            { special.picture.url ? 
                                <div className="col-4 d-none d-sm-block">
                                    <img className="special img-fluid" src={special.picture.url}  alt="special"></img>
                                </div>
                                :
                                <div className="col-4 d-none d-sm-block">
                                    <img className="special img-fluid" src='/question.png'  alt="missing"></img>
                                </div>
                            }
                        </div>
                        <div className="row mt-1 text-left">        
                            <div className="col">
                                <div className="row mx-md-3 mx-lg-5">
                                    <div className="col mb-xl-5 my-lg-4 my-md-2">
                                        <div className="">
                                            Move Name: {special.name}
                                        </div>
                                    </div>
                                    <div className="col mb-xl-5 my-lg-4 my-md-2">
                                        <div className="">
                                            Move Input: {special.input}
                                        </div>
                                    </div>
                                    <div className="w-100">
                                    </div>
                                    <div className="col mt-xl-5 my-lg-4 my-md-2">
                                        <div className="text-left notes-box">
                                            Notes: 
                                            {special.special_notes}
                                        </div>
                                    </div>
                                </div> 
                                {this.props.user && this.props.user.admin ? 
                                <div className="float-right col">
                                    <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Special</button> 
                                    <button className="btn btn-danger btn-sm float-left" onClick={ (event) => window.confirm("Are you sure you want to delete that?") && this.deleteButtonClick(special.id)}>Delete Special</button>  
                                </div>
                                : null} 
                                <br></br>
                                <br></br>
                            </div>                                         
                        </div>
                                           
                            <Variants 
                                params={this.props.params}
                                special_id={special.id}
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
                <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Specials +</button>
                <br></br>
                <br></br>
            </div> 
            : 
            null}
            

            {currentSpecials} 

            <Modal 
                show={addModalOpen}
                size="lg"
                >
                <Modal.Header>
                    <button className="btn btn-primary float-right" onClick={this.toggleAddModal}>cancel</button>
                </Modal.Header>
                <AddSpecial 
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
                <EditSpecial 
                params={params}
                props={specials[special_index]}
                />
                
            </Modal>
        </div>
        );
    }
}
 
export default Specials;