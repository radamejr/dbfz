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
        let { variants, params, special_id, addModalOpen, editModalOpen, variant_index } = this.state

        const currentVariants = variants.map((variant, index) => {
            return (
                <div key={index}>
                    <div className="variants row">
                        { variant.picture.url ? 
                            <img className="variant col-4" src={variant.picture.url}  alt="variant"></img>
                            :
                            null
                        }
                        <div className="col">
                            <div  className="float-left">
                            Input Type:  {variant.input_type}
                            </div>
                            <br></br>
                        </div>
                        {this.props.user && this.props.user.admin ? <button className="btn btn-primary btn-sm float-right" onClick={ (event) => this.editButtonClicked(index)}>Edit Variant</button> : null}   
                        
                    </div>
                    <br></br>
                    <br></br>
                </div>
            );
        });

        return ( 
            <div className="jsx-wrapper">
                {variants !== "" ? 
                
               <div>
                    {currentVariants}     
               </div>
                
                : null}
            {this.props.user && this.props.user.admin ? <button className="btn btn-primary btn-sm float-right" onClick={this.toggleAddModal}>Add Variants</button> : null}
            <br></br>
            <br></br>


                <Modal 
                    show={addModalOpen}
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