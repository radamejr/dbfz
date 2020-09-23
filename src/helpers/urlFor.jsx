
const env = process.env.NODE_ENV

let hostname = ''

env === 'development' ? hostname = 'http://localhost:3000/' : hostname = 'https://api.framehameha.com/'

const charactersAPI = (character_id = "") => {
    return `${hostname}api/v1/characters/${character_id}`;
}
  

const characterNormals = (character_id, normal_id = "") => {
  return `${hostname}api/v1/characters/${character_id}/normals/${normal_id}`
}

const characterSpecials = (character_id, special_id = "") => {
  return `${hostname}api/v1/characters/${character_id}/specials/${special_id}`;

}

const specialVariants = (character_id, special_id, variant_id="") => {
  return `${hostname}api/v1/characters/${character_id}/specials/${special_id}/special_variants/${variant_id}`;
}

const characterSupers = (character_id, super_id = "") => {
  return `${hostname}api/v1/characters/${character_id}/supers/${super_id}`;

}

const superVariants = (character_id, super_id, variant_id="") => {
  return `${hostname}api/v1/characters/${character_id}/supers/${super_id}/super_variants/${variant_id}`;
}

const characterAssists = (character_id, assist_id = "") => {
  return `${hostname}api/v1/characters/${character_id}/assists/${assist_id}`;

}

const twitterSearchBasic = (char_tag) => {
  return `https://twitter.com/search?q=%23${char_tag}&src=typed_query`
}

const auth = (action = '') => {
  return `${hostname}${action}`
}

export {
  charactersAPI,
  characterNormals,
  characterSpecials,
  specialVariants,
  characterSupers,
  superVariants,
  characterAssists,
  twitterSearchBasic,
  auth
}

//https://dbfztech-api.herokuapp.com
//http://localhost:3030