import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import AddCharacter from '../components/Modal/AddCharacter';
import axios from 'axios'
import { auth } from '../helpers/urlFor'



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

  logoutClick = () => {
    axios.delete(auth("logout"), {withCredentials: true})
    .then(response => {
      this.props.handleLogout()
    })
    .catch(error => console.log(error))
  }

  render() { 
  const { characters, user } = this.props
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <p className="navbar-brand">
          <Link to="/">Home</Link>
        </p>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="line"></span> 
        <span className="line"></span> 
        <span className="line"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
                    
          <li className="nav-item dropdown">
            <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Character Data
            </p>

            <div className="dropdown-menu scrollable-menu" aria-labelledby="navbarDropdown">
              <ul className="character-selector">
                {selections}
              </ul>
              {this.props.user && this.props.user.admin ? <button className="nav-link btn" onClick={this.toggleModal}>Add Character +</button> : null}
              
            </div>
          </li>

          <li className="nav-item">
            <Link to="/universal" className="nav-link">Universal Data</Link>
          </li>

          <li className="nav-item">
            <Link to="/learning" className="nav-link">Kame House</Link>
          </li>
        </ul>


        <div className="nav-link">
            {this.props.loggedInStatus 
            ? 
            <div>
              Welcome, {user.username}!
                <button type="button" onClick={this.logoutClick} className="btn btn-link">Logout</button>
            </div>  
            : 
            <Link to='/login'>Login</Link>}
        </div>
      </div>
      </nav>

      
      <br></br>
      
        <Modal show={isOpen} size='lg' >
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