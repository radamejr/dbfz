import React, { Component } from 'react';

class List extends Component {
    
      render() { 
        const { characters } = this.props;

        const selections = characters.map((character, index) => {
          return (
            <div className="row" key={index}>
              <h1 className="characterName">
                {character.name} id: {character.id} dlc?: {character.dlc ? "Yes" : "No"}
              </h1>
            </div>
            
          );
          
        });
      
        return (  
          <div className="list-container">
             {selections}
          </div>
        );
    }
}
 
export default List;