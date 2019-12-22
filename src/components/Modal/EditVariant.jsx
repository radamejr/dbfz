import React, { Component } from 'react';
import axios from 'axios';
import { specialVariant } from '../../helpers/urlFor';

class EditVariant extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            input_type: '',
            startup: '',
            active: '',
            recovery: '',
            gaurd: '',
            properties: '',
            advantage: '',
            immune_to: '',
            special_notes: '',
            meter_used: '',
            picture: '',
            isLoading: false
        }
        
    }

    componentDidMount = () => {
        let { props } = this.props
              
        this.setState({
            input_type: props.input_type,
            startup: props.startup,
            active: props.active,
            recovery: props.recovery,
            gaurd: props.gaurd,
            advantage: props.advantage,
            properties: props.properties,
            immune_to: props.immune_to,
            special_notes: props.special_notes,
            meter_used: props.meter_used,
            picture: props.picture,
            variant_id: props.id,
            isLoading: false

        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { input_type, startup, active, recovery, advantage, gaurd, properties, immune_to, special_notes, picture, meter_used, variant_id } = this.state;
        let { params, special_id } = this.props
        
        this.setState({isLoading: true})
        axios.put(specialVariant(params, special_id, variant_id), { input_type, startup, active, recovery, advantage, gaurd, properties, immune_to, special_notes, picture, meter_used })
        .then((result) => {
            window.location.reload(false);
        });
        
        
    }

    convertMoveImage = (e) => {

        let file = e.target.files[0]
        let reader = new FileReader();        

        reader.readAsDataURL(file);
        reader.onload = () => {
           
           this.setState({picture: reader.result})
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
        let { isLoading } = this.state       

        return ( 
            
            <form id="add-special" onSubmit={this.onSubmit}>
                
                <div className="row">
                    <div className="category">
                    Picture:
                        <div className="form-input">
                            <input name="picture"
                                type="file"
                                defaultValue={this.state.picture}
                                onChange={this.convertMoveImage}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Input Variation (L/M/H):
                        <div className="form-input">
                            <input name="input_type"
                                type="text"
                                defaultValue={this.state.input_type}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Startup Frames:
                        <div className="form-input">
                            <input name="startup"
                                type="text"
                                defaultValue={this.state.startup}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Active Frames:
                        <div className="form-input">
                            <input name="active"
                                type="text"
                                defaultValue={this.state.active}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Recovery Frames:
                        <div className="form-input">
                            <input name="recovery"
                                type="text"
                                defaultValue={this.state.advantage}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Advantage:
                        <div className="form-input">
                            <input name="advantage"
                                type="text"
                                defaultValue={this.state.advantage}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Gaurd:
                        <div className="form-input">
                            <input name="gaurd"
                                type="text"
                                defaultValue={this.state.gaurd}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Properties:
                        <div className="form-input">
                            <input name="properties"
                                type="text"
                                defaultValue={this.state.properties}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    
                    <div className="category">
                    Immune To:
                        <div className="form-input">
                            <input name="immune_to"
                                type="text"
                                defaultValue={this.state.immune_to}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Special Notes:
                        <div className="form-input">
                            <input name="special_notes"
                                type="text"
                                defaultValue={this.state.special_notes}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Meter Used:
                        <div className="form-input">
                            <input name="meter_used"
                                type="text"
                                defaultValue={this.state.meter_used}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary float-right" disabled={isLoading}>
                    {isLoading ? 
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only"></span>
                    </div>
                    :
                    "Edit"}
                </button>
                
            </form>
        );
    }
}
 
export default EditVariant;