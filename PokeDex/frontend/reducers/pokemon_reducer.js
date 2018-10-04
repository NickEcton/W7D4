import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions.js';


export const pokemonReducer = (state = {}, action) => {

  let newState = Object.assign({}, state);

  switch (action.type){
    case RECEIVE_ALL_POKEMON: return Object.assign(newState, action.pokemon);
    case RECEIVE_SINGLE_POKEMON: return Object.assign(newState, {[action.payload.pokemon.id]: action.payload.pokemon});
    default: return state;
  }


};
