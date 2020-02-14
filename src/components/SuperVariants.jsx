import React, { Component } from 'react';
import { superVariants } from '../helpers/urlFor'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import AddVariant from './Modal/AddVariant'
import EditVariant from './Modal/EditVariant'



class SuperVariants extends Component {
    constructor() {
        super();
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.getVariants = this.getVariants.bind(this);
        this.state = {
            params: '',
            super_id: '',
            variants: [],
            addModalOpen: false,
            editModalOpen: false,
            variant_index: ''
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

    deleteButtonClick = (id) => {

        this.deleteVariant(id)
    }

     deleteVariant = (id) => {
        let {  super_id , params  } = this.props
        
        axios.delete(superVariants(params.id, super_id, id), {withCredentials: true})
        .then((result) => {
            window.location.reload(false);
        });
    }

    editButtonClicked = (id) => {
        
        this.setState({variant_index: id})
        this.toggleEditModal()
    }

    componentDidMount = () => {  
        this.setState({ variants: [], params: this.props.params.id, super_id: this.props.super_id});
        this.getVariants();          
    }    

    componentDidUpdate(prevProps) {
        
        if (prevProps.params.id !== this.props.params.id) {
            this.setState({ variants: [], params: this.props.params.id, super_id: this.props.super_id});     
            this.getVariants();
            
        }
        
    }

    async getVariants() {
        let { super_id, params } = this.props

        try {
            const response = await axios.get(superVariants(params.id, super_id));
            response.data.sort((a, b) => a.id - b.id)
            this.setState({variants: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }


    render() { 
        const { variants, params, super_id, addModalOpen, editModalOpen, variant_index } = this.state
 
        const currentVariants = variants.map((variant, index) => {
            return (
                <div key={index}>
                    <div className="variants container mt-0">
                        <div className="row">
                            { variant.picture.url ?
                                <div className="col-sm d-none d-sm-block">                              
                                        <div className="mt-3">
                                            <span className="helper"></span>
                                            <img className="variant img-fluid" src={variant.picture.url}  alt="variant"></img>
                                        </div>
                                </div>
                                :
                                null
                                }
                        
                            <div className="col mt-1">                                 
                                <div className="row text-left">
                                    <div className="col-sm">
                                        <p className="">
                                            Input:    {variant.input_type}
                                        </p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="">
                                            Startup:    {variant.startup}
                                        </p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="">
                                            Active:  {variant.active}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    
                                </div>
                                <div className="row text-left">
                                    <div className="col-sm">
                                        <p className="text-left notes-box">
                                            Notes: 
                                        </p>
                                        <p className="text-left notes-box">
                                            {variant.special_notes}
                                        </p>
                                    </div> 
                                </div>
                            </div>

                            <div className="row col mb-2">
                                {this.props.user && this.props.user.admin ? 
                                <div className="float-right col">
                                    <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Variant</button>
                                    <button className="btn btn-danger btn-sm float-left" onClick={ (event) => window.confirm("Are you sure you want to delete that?") && this.deleteButtonClick(variant.id)}>Delete Variant</button>  
                                </div> 
                                : null} 
                            </div> 
                        </div>                       
                    </div>
                </div>
            );
        });

        return ( 
            <div>
                {this.props.user && this.props.user.admin ?
                <div>
                    <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Variants</button> 
                    <br></br>
                    <br></br>
                </div>
                : 
                null}
                {variants.length !== 0 ? 
                <div id={`variant-accordion-${super_id}`}>
                    <div className="card">
                        <div className="card-header" id="variantHeading">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target={`#variant-${super_id}`} aria-expanded="true" aria-controls="collapseOne">
                                    Super Move Variant
                                </button>
                            </h5>
                        </div>
                        <div id={`variant-${super_id}`} className="collapse" aria-labelledby="headingOne" data-parent={`#variant-accordion-${super_id}`}>
                            <div className="card-body">
                                {currentVariants} 
                            </div>
                        </div>
                    </div>

                     
                </div>                  
                : null}

                
                <Modal 
                    show={addModalOpen}
                    size="lg"
                >
                    <Modal.Header>
                        <button className="btn btn-primary float-right" onClick={this.toggleAddModal}>cancel</button>
                    </Modal.Header>
                    <AddVariant 
                    params={params}
                    move_id={super_id}
                    getVariants={this.getVariants}
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
                <EditVariant 
                params={params}
                props={variants[variant_index]}
                move_id={super_id}
                getVariants={this.getVariants}
                toggleEditModal={this.toggleEditModal}
                />
                
            </Modal>

            </div>            
         );
    }
}
 
export default SuperVariants;