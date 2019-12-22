import React, { Component } from 'react';
import axios from 'axios';
import { characterSpecial } from '../../helpers/urlFor';

class EditSpecial extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            name: '',
            input: '',
            startup: '',
            active: '',
            recovery: '',
            gaurd: '',
            properties: '',
            advantage: '',
            immune_to: '',
            special_notes: '',
            meter_used: '',
            picture: ''
        }
        
    }

    componentDidMount = () => {
        let { props } = this.props
              
        this.setState({
            name: props.name,
            input: props.input,
            special_notes: props.special_notes,
            picture: props.picture,
            special_id: props.id,
            isLoading: false

        })
    }

    

    onSubmit = (e) => {
        e.preventDefault();
        const { input, name, startup, active, recovery, advantage, gaurd, properties, immune_to, special_notes, picture, meter_used, special_id } = this.state;
        let { params } = this.props

        this.setState({isLoading: true})
        axios.put(characterSpecial(params, special_id), { input, name, startup, active, recovery, advantage, gaurd, properties, immune_to, special_notes, picture, meter_used })
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
            
            <form id="edit-special" onSubmit={this.onSubmit}>
                
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
                    Name:
                        <div className="form-input">
                            <input name="name"
                                type="text"
                                defaultValue={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Input:
                        <div className="form-input">
                            <input name="input"
                                type="text"
                                defaultValue={this.state.input}
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
 
export default EditSpecial;