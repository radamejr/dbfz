const characterAPI = (character_id) => {
    return 'http://localhost:3030/api/v1/characters' + character_id;
  };

const charactersAPI = () => {
    return 'http://localhost:3030/api/v1/characters';
}
  
  export {
    characterAPI,
    charactersAPI
  }

