import React, { Component } from 'react';
import axios from 'axios';
import { charactersAPI } from '../helpers/urlFor';

class AddCharacter extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            dlc: false,
            discord_link: '',
            combo_doc_link: '',

        }
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, dlc, discord_link, combo_doc_link } = this.state;
        console.log(name, dlc, discord_link, combo_doc_link)

        axios.post(charactersAPI(), {name, dlc, discord_link, combo_doc_link })
        .then((result) => {
            window.location.reload(false);
        });
        
        
    }



    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
        return ( 
            <form id="add-character" onSubmit={this.onSubmit}>
                
                <div className="row">
                    <div className="category">
                        Character Name:
                        <div className="form-input">
                            <input name="name"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    DLC?:
                        <div className="form-input">
                            <input name="dlc"
                                type="text"
                                value={this.state.dlc}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Discord Link:
                        <div className="form-input">
                            <input name="discord_link"
                                type="text"
                                value={this.state.discord_link}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Combo Doc Link:
                        <div className="form-input">
                            <input name="combo_doc_link"
                                type="text"
                                value={this.state.combo_doc_link}
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
 
export default AddCharacter;