import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';

class Nav extends Component {
    
    render() { 
        const { characters } = this.props

        const selections = characters.map((character, index) => {
            return (
              
                <p className="dropdown-item" key={index}>
                    <Link to={"/characters/" + character.id}>{character.name}</Link>
                </p>                
              
              
            );
            
          });
        
          return (  
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
                    {selections}
                  </div>
                </li>
                
              </ul>
              
            </div>
          </nav>
            
          );
    }
}
 
export default Nav;