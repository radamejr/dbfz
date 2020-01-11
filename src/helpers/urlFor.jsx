const charactersAPI = (character_id = "") => {
    return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}`;
}
  

const characterNormals = (character_id, normal_id = "") => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/normals/${normal_id}`
}

const characterSpecials = (character_id, special_id = "") => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/specials/${special_id}`;

}

const specialVariants = (character_id, special_id, variant_id="") => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/specials/${special_id}/special_variants/${variant_id}`;
}

const characterSupers = (character_id, super_id = "") => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/supers/${super_id}`;

}

const superVariants = (character_id, super_id, variant_id="") => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/supers/${super_id}/super_variants/${variant_id}`;
}

const characterAssists = (character_id, assist_id = "") => {
  return `https://dbfztech-api.herokuapp.com/api/v1/characters/${character_id}/assists/${assist_id}`;

}

const auth = (action = '') => {
  return `https://dbfztech-api.herokuapp.com/${action}`
}

export {
  charactersAPI,
  characterNormals,
  characterSpecials,
  specialVariants,
  characterSupers,
  superVariants,
  characterAssists,
  auth
}

//https://dbfztech-api.herokuapp.com
//http://localhost:3030