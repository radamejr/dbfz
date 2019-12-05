import React, { Component } from 'react';
import axios from 'axios';
import { characterSpecials } from '../../helpers/urlFor';

class AddSpecial extends Component {
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
            meter_used: ''
        }
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { input, name, startup_frames, meter_used, recovery_on_hit, recovery_on_block, recovery_on_whiff, cancellable, blockstun, immune_to } = this.state;
        let { params } = this.props
        

        axios.post(characterSpecials(params), {input, name, startup_frames, meter_used, recovery_on_hit, recovery_on_block, recovery_on_whiff, cancellable, blockstun, immune_to })
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
                        Name:
                        <div className="form-input">
                            <input name="name"
                                type="text"
                                value={this.state.name}
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
                    <div className="category">
                    Meter Used:
                        <div className="form-input">
                            <input name="meter_used"
                                type="text"
                                value={this.state.meter_used}
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
 
export default AddSpecial;