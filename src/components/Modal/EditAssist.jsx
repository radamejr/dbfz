import React, { Component } from 'react';
import axios from 'axios';
import { characterAssist } from '../../helpers/urlFor';

class EditAssist extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            startup: '',
            active: '',
            onscreen: '',
            hitstop_block: '',
            hitstop_hit: '',
            blockstun: '',
            special_notes: '',
            picture: '',
            isLoading: false,
            id: ''
        }
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { input, startup, active, onscreen, hitstop_block, hitstop_hit, blockstun, special_notes, picture, id } = this.state;
        let { params } = this.props
        
        this.setState({isLoading: true})
        axios.put(characterAssist(params.id, id), { input, startup, active, onscreen, hitstop_block, hitstop_hit, blockstun, special_notes, picture })
        .then((result) => {
            window.location.reload(false);
        });
        
        
    }

    componentDidMount = () => {
        let { props } = this.props
              
        this.setState({
            startup: props.startup,
            active: props.active,
            onscreen: props.onscreen,
            blockstun: props.blockstun,
            hitstop_block: props.hitstop_block,
            hitstop_hit: props.hitstop_hit,
            immune_to: props.immune_to,
            special_notes: props.special_notes,
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


    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
               
        let { isLoading } = this.state

        return ( 
            
            <form id="edit-assist" onSubmit={this.onSubmit}>
                
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
                    Onscreen Frames:
                        <div className="form-input">
                            <input name="onscreen"
                                type="text"
                                defaultValue={this.state.onscreen}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Hitstop On Block:
                        <div className="form-input">
                            <input name="hitstop_block"
                                type="text"
                                defaultValue={this.state.hitstop_block}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Histop On Hit:
                        <div className="form-input">
                            <input name="hitstop_hit"
                                type="text"
                                defaultValue={this.state.hitstop_hit}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Blockstun:
                        <div className="form-input">
                            <input name="blockstun"
                                type="text"
                                defaultValue={this.state.blockstun}
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
 
export default EditAssist;