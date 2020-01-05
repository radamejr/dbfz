import React, { Component } from 'react';
import axios from 'axios';
import { charactersAPI } from '../../helpers/urlFor';

class EditCharacter extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            dlc: '',
            discord_link: '',
            combo_doc_link: '',
            icon:'',
            character_picture: '',
            twitter_tag: '',
            about: ''

        }
        
    }

    componentDidMount = () => {
        this.setState({
            name: this.props.name,
            dlc: this.props.dlc,
            discord_link: this.props.discord_link,
            combo_doc_link: this.props.combo_doc_link,
            icon: this.props.icon,
            character_picture: this.props.picture,
            twitter_tag: this.props.twitter_tag,
            about: this.props.about,
            isLoading: false

        })
    }

    convertIconImage = (e) => {

        let file = e.target.files[0]
        let reader = new FileReader();        

        reader.readAsDataURL(file);
        reader.onload = () => {
           
           this.setState({icon: reader.result})
        }
    }

    convertCharacterImage = (e) => {

        let file = e.target.files[0]
        let reader = new FileReader();        

        reader.readAsDataURL(file);
        reader.onload = () => {
           
           this.setState({character_picture: reader.result})
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, dlc, discord_link, combo_doc_link, icon, character_picture, twitter_tag, about } = this.state;
        let { params } = this.props
        
        this.setState({isLoading: true})
        axios.put(charactersAPI(params.id), {name, dlc, discord_link, combo_doc_link, icon, character_picture, twitter_tag, about }, {withCredentials: true})
        .then((result) => {
           this.props.getCharacter()
           this.props.toggleModal()
        });
        
        
    }

    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
        const { name, dlc, discord_link, combo_doc_link, twitter_tag, about } = this.state;
        let { isLoading } = this.state

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
                    <div className="category">
                        Twitter Tag:
                        <div className="form-input">
                            <input name="twitter_tag"
                                type="text"
                                defaultValue={twitter_tag}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Character Picture:
                        <div className="form-input">
                            <input name="character_picture"
                                type="file"
                                onChange={this.convertCharacterImage}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Character Icon:
                        <div className="form-input">
                            <input name="icon"
                                type="file"
                                onChange={this.convertIconImage}
                            />
                        </div>
                    </div>
                </div>
                <div className="category">
                    About:
                    <div className="form-input">
                        <textarea name="about"
                            type="text"
                            defaultValue={about}
                            onChange={this.handleChange}
                            cols="50"
                            rows="5"
                        >
                        </textarea>
                    </div>
                </div>
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
 
export default EditCharacter;