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

const specialVariants = (character_id, special_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/specials/${special_id}/variants/`;
}

const specialVariant = (character_id, special_id, variant_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/specials/${special_id}/variants/${variant_id}`;
}

const characterSupers = (character_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/supers`;

}

const characterSuper = (character_id, super_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/supers/${super_id}`;

}

const characterAssist = (character_id, assist_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/assists/${assist_id}`;

}

const characterAssists = (character_id) => {
  return `http://localhost:3030/api/v1/characters/${character_id}/assists/`;

}

const auth = (action = '') => {
  return `http://localhost:3030/${action}`
}

export {
  characterAPI,
  charactersAPI,
  characterNormals,
  characterNormal,
  characterSpecials,
  characterSpecial,
  specialVariants,
  specialVariant,
  characterSupers,
  characterSuper,
  characterAssist,
  characterAssists,
  auth
}

//https://dbfztech-api.herokuapp.com
//http://localhost:3030