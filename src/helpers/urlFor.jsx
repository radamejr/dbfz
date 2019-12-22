const characterAPI = (character_id) => {
    return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}`;
};

const charactersAPI = () => {
    return 'https://dbfztech-api.herokuapp.com/api/v1/characters';
}
  
const characterNormals = (character_id) => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/normals`;

}

const characterNormal = (character_id, normal_id) => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/normals/${normal_id}`
}

const characterSpecials = (character_id) => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/specials`;

}

const characterSpecial = (character_id, special_id) => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/specials/${special_id}`;

}

const specialVariants = (character_id, special_id) => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/specials/${special_id}/variants/`;
}

const specialVariant = (character_id, special_id, variant_id) => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/specials/${special_id}/variants/${variant_id}`;
}

const characterSupers = (character_id) => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/supers`;

}

const characterSuper = (character_id, super_id) => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/supers/${super_id}`;

}

const auth = (action = '') => {
  return `https://dbfztech-api.herokuapp.com/${action}`
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
  auth
}

//https://dbfztech-api.herokuapp.com
//http://localhost:3030