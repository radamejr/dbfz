import React, { Component } from 'react';
import { specialVariants } from '../helpers/urlFor'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import AddVariant from './Modal/AddVariant'
import EditVariant from './Modal/EditVariant'



class Variants extends Component {
    constructor() {
        super();
        this.state = {
            params: '',
            special_id: '',
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

    editButtonClicked = (id) => {
        
        this.setState({variant_index: id})
        this.toggleEditModal()
    }

    componentDidMount = () => {  
        this.setState({ variants: [], params: this.props.params.id, special_id: this.props.special_id});
        this.getVariants();          
    }    

    componentDidUpdate(prevProps) {
        
        if (prevProps.params.id !== this.props.params.id) {
            this.setState({ variants: [], params: this.props.params.id, special_id: this.props.special_id});     
            this.getVariants();
            
        }
        
    }

    async getVariants() {
        let { special_id, params } = this.props

        try {
            const response = await axios.get(specialVariants(params.id, special_id));
            response.data.sort((a, b) => a.id - b.id)
            this.setState({variants: response.data})
          } catch (error) {
            console.error(error);
          }
        
    }


    render() { 
        const { variants, params, special_id, addModalOpen, editModalOpen, variant_index } = this.state
 
        const currentVariants = variants.map((variant, index) => {
            return (
                <div key={index}>
                    <div className="variants container mt-0">
                        <div className="row mt-1">
                            { variant.picture.url ? 
                                <div className="col-4 d-none d-sm-block">
                                    <img className="variant img-fluid" src={variant.picture.url}  alt="variant"></img>
                                </div>
                                :
                                null
                            }
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col my-xl-5 my-lg-4 my-md-3">
                                    <div  className="">
                                    Type:  
                                    <br></br>
                                    {variant.input_type}
                                    </div>
                                </div>
                                <div className="col my-xl-5 my-lg-4 my-md-3">
                                    <div  className="">
                                    Startup:  
                                    <br></br>
                                    {variant.startup}
                                    </div>
                                </div>
                                <div className="col my-xl-5 my-lg-4 my-md-3">
                                    <div  className="">
                                    Active:  
                                    <br></br>
                                    {variant.active}
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col my-xl-5 my-lg-4 my-md-3">
                                    <div  className="">
                                    Advantage:  
                                    <br></br>
                                    {variant.advantage !== null ? <div>{variant.advantage}</div> : "N/A"}
                                    </div>
                                </div>
                                <div className="col my-xl-5 my-lg-4 my-md-3">
                                    <div  className="">
                                    Gaurd:  
                                    <br></br>
                                    {variant.gaurd}
                                    </div>
                                </div>
                                <div className="col my-xl-5 my-lg-4 my-md-3">
                                    <div  className="">
                                    Meter Used:  
                                    <br></br>
                                    {variant.meter_used}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row col mb-2">
                            <div  className="notes-box text-left">
                                Notes:  
                                <br></br>
                                {variant.special_notes}
                            </div>
                            {this.props.user && this.props.user.admin ? 
                            <div className="float-right col">
                                <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Variant</button>
                            </div> 
                            : null}  
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
                <div id={`variant-accordion-${special_id}`}>
                    <div className="card">
                        <div className="card-header" id="variantHeading">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target={`#variant-${special_id}`} aria-expanded="true" aria-controls="collapseOne">
                                    Input Variant Information
                                </button>
                            </h5>
                        </div>
                        <div id={`variant-${special_id}`} className="collapse" aria-labelledby="headingOne" data-parent={`#variant-accordion-${special_id}`}>
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
                    special_id={special_id}
                
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
                special_id={special_id}
                />
                
            </Modal>

            </div>            
         );
    }
}
 
export default Variants;