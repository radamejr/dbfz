import React, { Component } from 'react';
import axios from 'axios';
import { charactersAPI } from '../../helpers/urlFor';
import Modal from 'react-bootstrap/Modal'
import Loading from './Loading'


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
            isLoading: false


        }
        
    }



    onSubmit = (e) => {
        e.preventDefault();
        const { name, dlc, discord_link, combo_doc_link, icon, character_picture} = this.state;
        
        this.setState({isLoading: true})
        axios.post(charactersAPI(), {name, dlc, discord_link, combo_doc_link, icon, character_picture })
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
                <br></br>
                <button type="submit" className="btn btn-primary float-right">Add</button>
                                
                <Modal show={isLoading}>
                    <Loading />
                </Modal>
            </form>
        );
    }
}
 
export default AddCharacter;