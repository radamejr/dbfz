const characterAPI = (character_id) => {
    return `http://localhost:3030/api/v1/characters/${character_id}`;
};

const charactersAPI = () => {
    return 'http://localhost:3030/api/v1/characters';
}
  


const characterNormals = (character_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/normals`;

}

const characterSpecials = (character_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/specials`;

}

const characterSupers = (character_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/supers`;

}



export {
  characterAPI,
  charactersAPI,
  characterNormals,
  characterSpecials,
  characterSupers
}