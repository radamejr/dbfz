import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { characterAPI } from '../helpers/urlFor'
import axios from 'axios'


function CharacterDetail( { match }) {

  
  useEffect(() => {
    getCharacter();
    
  }, [])

  const [character, setCharacter] = useState({});

  const getCharacter = async () => {
    const getCharacter = await fetch(characterAPI(match.params.id));
    
    const character = await getCharacter.json();
    setCharacter(character);
    console.log(character);
   
  }
  
  
  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  );
}

 
export default CharacterDetail;