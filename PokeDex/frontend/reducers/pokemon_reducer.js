import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions.js';


export const pokemonReducer = (state = {}, action) => {

  let newState = Object.assign({}, state);

  switch (action.type){
    case RECEIVE_ALL_POKEMON: return action.pokemon;
    default: return state;
  }


};
