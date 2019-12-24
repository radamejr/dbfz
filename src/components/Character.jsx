import React, { Component } from 'react';
import { characterAPI } from './../helpers/urlFor';
import axios from 'axios';
import Normals from './Normals';
import Specials from './Specials';
import Supers from './Supers';
import Assist from './Assist'
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
                  <a className="btn btn-link" href={character.discord_link} target="_blank" rel="noopener noreferrer" role="button">Discord</a>
                  <a className="btn btn-link" href={character.combo_doc_link} target="_blank" rel="noopener noreferrer" role="button">Combo Doc</a>
                  <br></br>
                  #{character.twitter_tag}
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

              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#normals" aria-expanded="true" aria-controls="collapseOne">
                        Normals
                      </button>
                    </h5>
                  </div>

                  <div id="normals" className="collapse normal-container" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">                   
                    <Normals 
                        params={params}
                        user={this.props.user}
                    />
                    </div>
                  </div>

                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#specials" aria-expanded="false" aria-controls="collapseTwo">
                        Specials
                      </button>
                    </h5>
                  </div>


                  <div id="specials" className="collapse special-container" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <Specials
                          params={params}
                          user={this.props.user}
                      />
                    </div>
                  </div>

                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#supers" aria-expanded="false" aria-controls="collapseThree">
                        Supers
                      </button>
                    </h5>
                  </div>


                  <div id="supers" className="collapse super-container" aria-labelledby="headingThree" data-parent="#accordion">
                    
                    <div className="card-body">
                      <Supers
                          params={params}
                          user={this.props.user}
                      />
                    </div>
                  </div>

                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#assists" aria-expanded="false" aria-controls="collapseFour">
                        Assist(s)
                      </button>
                    </h5>
                  </div>


                  <div id="assists" className="collapse assist-container" aria-labelledby="headingFour" data-parent="#accordion">
                    
                   <div className="card-body">
                      <Assist
                          params={params}
                          user={this.props.user}
                      />
                   </div>
                  </div>
                  
                </div>
              </div>
            </div>
            

        );
    }
}
 
export default Character;