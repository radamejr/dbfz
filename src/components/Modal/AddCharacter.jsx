import React, { Component } from 'react';
import axios from 'axios';
import { charactersAPI } from '../../helpers/urlFor';



class AddCharacter extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            dlc: false,
            discord_link: '',
            combo_doc_link: '',
            icon: '',
            character_picture: '',
            twitter_tag: '',
            isLoading: false


        }
        
    }



    onSubmit = (e) => {
        e.preventDefault();
        const { name, dlc, discord_link, combo_doc_link, icon, character_picture, twitter_tag} = this.state;
        
        this.setState({isLoading: true})
        axios.post(charactersAPI(), {name, dlc, discord_link, combo_doc_link, icon, character_picture, twitter_tag })
        .then((result) => {
            window.location.reload(false);
        });
               
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

    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  
    render() { 
        let { isLoading } = this.state

        return ( 
            <form id="add-character" onSubmit={this.onSubmit} >
                
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
                    <div className="category">
                        Twitter Tag:
                        <div className="form-input">
                            <input name="twitter_tag"
                                type="text"
                                defaultValue="CHAR_TAG"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Icon Image:
                        <div className="form-input">
                            <input name="icon"
                                type="file"
                                defaultValue=""
                                onChange={this.convertIconImage.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Character Image:
                        <div className="form-input">
                            <input name="character_picture"
                                type="file"
                                defaultValue=""
                                onChange={this.convertCharacterImage.bind(this)}
                            />
                        </div>
                    </div>
                </div>
                <div className="category">
                    About:
                    <div className="form-input">
                        <textarea name="about"
                            type="text"
                            defaultValue=""
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
                    "Add"}
                </button>
                                    
            </form>

//<Modal show={isLoading}>
//<Loading />
//</Modal>
        );
    }
}
 
export default AddCharacter;