import React, { Component } from 'react';
import axios from 'axios';
import { characterNormals } from '../../helpers/urlFor';

class EditNormal extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            input: '',
            startup: '',
            active: '',
            recovery: '',
            gaurd: '',
            properties: '',
            advantage: '',
            immune_to: '',
            special_notes: '',
            picture: '',
            move_type: '',
            id: ''
        }
        
    }

    componentDidMount = () => {
        let { props } = this.props
              
        this.setState({
            input: props.input,
            startup: props.startup,
            active: props.active,
            recovery: props.recovery,
            gaurd: props.gaurd,
            advantage: props.advantage,
            properties: props.properties,
            immune_to: props.immune_to,
            special_notes: props.special_notes,
            move_type: props.move_type,
            picture: props.picture,
            id: props.id,
            isLoading: false

        })
    }
    
    convertMoveImage = (e) => {

        let file = e.target.files[0]
        let reader = new FileReader();        

        reader.readAsDataURL(file);
        reader.onload = () => {
           
           this.setState({picture: reader.result})
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { input, startup, active, recovery, advantage, gaurd, properties, immune_to, special_notes, move_type, picture, id } = this.state;
        let { params } = this.props

        this.setState({isLoading: true})
        axios.put(characterNormals(params, id), {input, startup, active, recovery, advantage, gaurd, properties, immune_to, special_notes, move_type, picture }, {withCredentials: true})
        .then((result) => {
            window.location.reload(false);
        });
        
        
    }

    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
        let { isLoading } = this.state       

        return ( 
            
            <form id="edit-normal" onSubmit={this.onSubmit}>
                
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
                    First Active Frame:
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
                                defaultValue={this.state.recovery}
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
                    Type:
                        <div className="form-input">
                            <input name="move_type"
                                type="text"
                                defaultValue={this.state.move_type}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Special Notes:
                        <div className="form-input">
                            <textarea name="special_notes"
                                type="text"
                                defaultValue={this.state.special_notes}
                                onChange={this.handleChange}
                                cols="50"
                                rows="5"
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
 
export default EditNormal;