import React, { Component } from 'react';
import axios from 'axios';
import { characterAPI } from '../../helpers/urlFor';

class EditCharacter extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            dlc: '',
            discord_link: '',
            combo_doc_link: '',

        }
        
    }

    componentDidMount = () => {
        this.setState({
            name: this.props.name,
            dlc: this.props.dlc,
            discord_link: this.props.discord_link,
            combo_doc_link: this.props.combo_doc_link

        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, dlc, discord_link, combo_doc_link } = this.state;
        let { params } = this.props
        
        axios.put(characterAPI(params.id), {name, dlc, discord_link, combo_doc_link })
        .then((result) => {
           window.location.reload(false);
        });
        
        
    }

    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
        const { name, dlc, discord_link, combo_doc_link } = this.state;
        
        return ( 
            <form id="edit-character" onSubmit={this.onSubmit}>
                
                <div className="row">
                    <div className="category">
                        Character Name:
                        <div className="form-input">
                            <input name="name"
                                type="text"
                                defaultValue={name}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                    DLC?:
                        <div className="form-input">
                            <input name="dlc"
                                type="text"
                                defaultValue={dlc ? "True" : "False"}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Discord Link:
                        <div className="form-input">
                            <input name="discord_link"
                                type="text"
                                defaultValue={discord_link}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Combo Doc Link:
                        <div className="form-input">
                            <input name="combo_doc_link"
                                type="text"
                                defaultValue={combo_doc_link}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary float-right">Save Changes</button>
                
            </form>
        );
    }
}
 
export default EditCharacter;