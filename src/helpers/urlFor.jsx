const characterAPI = (character_id) => {
    return `http://localhost:3030/api/v1/characters/${character_id}`;
};

const charactersAPI = () => {
    return 'http://localhost:3030/api/v1/characters';
}
  
const characterNormals = (character_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/normals`;

}

const characterNormal = (character_id, normal_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/normals/${normal_id}`
}

const characterSpecials = (character_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/specials`;

}

const characterSpecial = (character_id, special_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/specials/${special_id}`;

}

const characterSupers = (character_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/supers`;

}

const characterSuper = (character_id, super_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/supers/${super_id}`;

}


export {
  characterAPI,
  charactersAPI,
  characterNormals,
  characterNormal,
  characterSpecials,
  characterSpecial,
  characterSupers,
  characterSuper
}