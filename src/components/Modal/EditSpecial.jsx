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
            startup_frames: '',
            recovery_on_hit: '',
            recovery_on_block: '',
            recovery_on_whiff: '',
            cancellable: false,
            blockstun: '',
            immune_to: '',
            meter_used: '',
            id: ''
        }
        
    }

    componentDidMount = () => {
        let { props } = this.props
              
        this.setState({
            name: props.name,
            input: props.input,
            startup_frames: props.startup_frames,
            //active_frames: props.active_frames,
            recovery_on_hit: props.recovery_on_hit,
            recovery_on_block: props.recovery_on_block,
            recovery_on_whiff: props.recovery_on_whiff,
            cancellable: props.cancellable,
            blockstun: props.blockstun,
            immune_to: props.immune_to,
            id: props.id

        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, input, startup_frames, active_frames, recovery_on_hit, recovery_on_block, recovery_on_whiff, cancellable, blockstun, immune_to, id } = this.state;
        let { params } = this.props

        axios.put(characterSpecial(params, id), {name, input, startup_frames, active_frames, recovery_on_hit, recovery_on_block, recovery_on_whiff, cancellable, blockstun, immune_to })
        .then((result) => {
            window.location.reload(false);
        });
        
        
    }



    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
               

        return ( 
            
            <form id="edit-special" onSubmit={this.onSubmit}>
                
                <div className="row">
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
                            <input name="startup_frames"
                                type="text"
                                defaultValue={this.state.startup_frames}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Active Frames:
                        <div className="form-input">
                            <input name="active_frames"
                                type="text"
                                value="coming soon"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Recovery On Hit:
                        <div className="form-input">
                            <input name="recovery_on_hit"
                                type="text"
                                defaultValue={this.state.recovery_on_hit}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Recovery On Block:
                        <div className="form-input">
                            <input name="recovery_on_block"
                                type="text"
                                defaultValue={this.state.recovery_on_block}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Recovery On Whiff:
                        <div className="form-input">
                            <input name="recovery_on_whiff"
                                type="text"
                                defaultValue={this.state.recovery_on_whiff}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Cancellable?:
                        <div className="form-input">
                            <input name="cancellable"
                                type="text"
                                defaultValue={this.state.cancellable}
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
                    Immune To:
                        <div className="form-input">
                            <input name="immune_to"
                                type="text"
                                defaultValue={this.state.immune_to}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary float-right">Edit</button>
                
            </form>
        );
    }
}
 
export default EditSpecial;