import React, { Component } from 'react';
import { characterAPI } from './../helpers/urlFor';
import axios from 'axios';
import Normals from './Normals';
import Specials from './Specials';
import Supers from './Supers';
import Modal from 'react-bootstrap/Modal'
import EditCharacter from './Modal/EditCharacter'



class Character extends Component {
    constructor () {
      super();
      this.state = {
        character: {},
        isOpen: false,
        picture: "",
        icon: ""

      }
    }
    
    toggleModal = () => {
        let { isOpen } = this.state
        this.setState({isOpen: !isOpen})
      }

    testToggle = () => {
      let { loading } = this.state
      this.setState({loading: !loading})
    }
        
    componentDidUpdate(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.setState({ 
              character: {},
              picture: "",
              icon: ""
            });
            this.getCharacter();
            
        }
        
    }

    componentDidMount = () => {
        this.getCharacter();
    }

    async getCharacter() {
        let { match: { params } } = this.props;
        
       try {
          const response = await axios.get(characterAPI(params.id));
            this.setState({
              character: response.data,
              picture: response.data.character_picture.url,
              icon: response.data.icon.url
            })
            
        } catch (error) {
            console.error(error);
        }
        
    }

    render() { 
        let { character, isOpen, picture, icon } = this.state; 
        let { match: { params } } = this.props;    
        
       
        
        return ( 
          
            
            <div className="container">
              
              <div className="row">
                <div className="character-text float-left">
                  {character.name}   <br></br>
                  {character.dlc ? "Yes" : "No"} <br></br>
                  {character.discord_link} <br></br>
                  {character.combo_doc_link} <br></br>
                </div>
                <div className="character-picture float-right"><img src={picture} alt="character"></img> <br></br></div>
              </div>

              {this.props.user && this.props.user.admin ? <button className="btn-primary btn btn-sm float-right" onClick={this.toggleModal}>Edit Character</button> : null}
              
              
              <br></br>
              <br></br>

              <Modal show={isOpen} >
                <Modal.Header>
                    <button className="btn btn-primary float-right" onClick={this.toggleModal}>cancel</button>
                </Modal.Header>
                <EditCharacter
                    params={params}
                    name={character.name}
                    dlc={character.dlc}
                    discord_link={character.discord_link}
                    combo_doc_link={character.combo_doc_link}
                    character_picture={picture}
                    character_icon={icon}
                />
                
              </Modal>

              
              <div className="normal-container">
                <Normals 
                    params={params}
                    user={this.props.user}
                />
                <br></br>
              </div>
              <div className="special-container">
                <Specials
                    params={params}
                    user={this.props.user}
                />
                <br></br>
              </div>
              <div className="super-container">
                <Supers
                    params={params}
                    user={this.props.user}
                />
              </div>
            </div>
            

        );
    }
}
 
export default Character;