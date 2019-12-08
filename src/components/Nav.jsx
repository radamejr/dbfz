import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import AddCharacter from '../components/Modal/AddCharacter';

class Nav extends Component {
    
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }

  }

  toggleModal = () => {
    let { isOpen } = this.state
    this.setState({isOpen: !isOpen})
  }

  render() { 
  const { characters } = this.props
  const { isOpen } = this.state
  
  const selections = characters.map((character, index) => {
    
      return (        
        <li key={index} >
          <Link to={"/characters/" + character.id} onClick={() => this.forceUpdate} >    
            <img src={character.icon.url} className="dropdown-item" alt="character-icon" ></img>        
          </Link>
        </li>
                            
      );
      
    });

    return (  
      // This is the navbar
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">
          <Link to="/">DBFZ</Link>
        </p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <p className="nav-link">
              <Link to='/characters'>Characters List</Link>  
            </p>
          </li>
          
          <li className="nav-item dropdown">
            <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Characters
            </p>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <ul className="character-selector">
                {selections}
              </ul>
              <button className="nav-link btn" onClick={this.toggleModal}>Add Character +</button>
            </div>
          </li>
          
        </ul>
        
      </div>
      </nav>

      
      <br></br>
      
        <Modal show={isOpen}>
          <Modal.Header>
            <button className="btn btn-primary float-right" onClick={this.toggleModal}>cancel</button>
          </Modal.Header>
          <AddCharacter />
          
        </Modal>
      </div>
    
      
    );
  }
}
 
export default Nav;