import React, { Component } from 'react';
import axios from 'axios';
import { characterNormals } from '../../helpers/urlFor';

class AddNormal extends Component {
    constructor () {
        super();
        this.state = {
            params: '',
            input: '',
            startup_frames: '',
            active_frames: '',
            recovery_on_hit: '',
            recovery_on_block: '',
            recovery_on_whiff: '',
            cancellable: false,
            blockstun: '',
            immune_to: ''
        }
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { input, startup_frames, active_frames, recovery_on_hit, recovery_on_block, recovery_on_whiff, cancellable, blockstun, immune_to } = this.state;
        let { params } = this.props
        

        axios.post(characterNormals(params), {input, startup_frames, active_frames, recovery_on_hit, recovery_on_block, recovery_on_whiff, cancellable, blockstun, immune_to })
        .then((result) => {
            window.location.reload(false);
        });
        
        
    }



    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
               

        return ( 
            
            <form id="add-normal" onSubmit={this.onSubmit}>
                
                <div className="row">
                    <div className="category">
                        Input:
                        <div className="form-input">
                            <input name="input"
                                type="text"
                                value={this.state.input}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Startup Frames:
                        <div className="form-input">
                            <input name="startup_frames"
                                type="text"
                                value={this.state.start_frames}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Active Frames:
                        <div className="form-input">
                            <input name="active_frames"
                                type="text"
                                value={this.state.active_frames}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Recovery On Hit:
                        <div className="form-input">
                            <input name="recovery_on_hit"
                                type="text"
                                value={this.state.recovery_on_hit}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Recovery On Block:
                        <div className="form-input">
                            <input name="recovery_on_block"
                                type="text"
                                value={this.state.recovery_on_block}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Recovery On Whiff:
                        <div className="form-input">
                            <input name="recovery_on_whiff"
                                type="text"
                                value={this.state.recovery_on_whiff}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Cancellable?:
                        <div className="form-input">
                            <input name="cancellable"
                                type="text"
                                value={this.state.cancellable}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Blockstun:
                        <div className="form-input">
                            <input name="blockstun"
                                type="text"
                                value={this.state.blockstun}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    Immune To:
                        <div className="form-input">
                            <input name="immune_to"
                                type="text"
                                value={this.state.immune_to}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary float-right">Add</button>
                
            </form>
        );
    }
}
 
export default AddNormal;