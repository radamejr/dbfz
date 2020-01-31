const charactersAPI = (character_id = "") => {
    return `http://localhost:3030/api/v1/characters/${character_id}`;
}
  

const characterNormals = (character_id, normal_id = "") => {
  return `http://localhost:3030/api/v1/characters/${character_id}/normals/${normal_id}`
}

const characterSpecials = (character_id, special_id = "") => {
  return `http://localhost:3030/api/v1/characters/${character_id}/specials/${special_id}`;

}

const specialVariants = (character_id, special_id, variant_id="") => {
  return `http://localhost:3030/api/v1/characters/${character_id}/specials/${special_id}/variants/${variant_id}`;
}

const characterSupers = (character_id, super_id = "") => {
  return `http://localhost:3030/api/v1/characters/${character_id}/supers/${super_id}`;

}

const characterAssists = (character_id, assist_id = "") => {
  return `http://localhost:3030/api/v1/characters/${character_id}/assists/${assist_id}`;

}

const auth = (action = '') => {
  return `http://localhost:3030/${action}`
}

export {
  charactersAPI,
  characterNormals,
  characterSpecials,
  specialVariants,
  characterSupers,
  characterAssists,
  auth
}

//https://dbfztech-api.herokuapp.com
//http://localhost:3030