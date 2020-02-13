import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { charactersAPI } from './../helpers/urlFor';
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
      this.toggleModal = this.toggleModal.bind(this);
      this.getCharacter = this.getCharacter.bind(this);
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
          const response = await axios.get(charactersAPI(params.id));
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
        let { characters } = this.props;

        if (params.id > 38) {
          return <Redirect to='/404' />
        }
        return ( 

            
            <div className="content-container container col-lg-9 col-md-11 col-sm-12">
              
              <div className="character">
                <div className="row">
                  <div className="col character-text text-left">
                    <h1>
                    {character.name} 
                    </h1>  
                    <br></br>
                    
                    {character.dlc ? <h4>DLC Only!</h4> : null } 
                   
                    <br></br>
                    <p className="notes-box">
                      {character.about}
                    </p>
                    <br></br>
                    <p className="notes-box">
                      For additional {character.name} details and resources be sure to visit the <a href={character.discord_link} target="_blank" rel="noopener noreferrer" role="button">Discord Server</a> and the <a href={character.combo_doc_link} target="_blank" rel="noopener noreferrer" role="button">Combo Document</a>.
                    </p>
                  </div>
                  <div className="col character-picture justify-content-center float-right d-none d-sm-block">
                    <img  src={picture} alt="character"></img> 
                    <br></br>
                  </div>
                </div>
              </div>

              {this.props.user && this.props.user.admin ? <button className="btn-primary btn btn-sm float-right" onClick={this.toggleModal}>Edit Character</button> : null}
              
              
              <br></br>
              <br></br>

              <Modal show={isOpen} size='lg' >
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
                    twitter_tag={character.twitter_tag}
                    about={character.about}
                    getCharacter={this.getCharacter}
                    toggleModal={this.toggleModal}
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