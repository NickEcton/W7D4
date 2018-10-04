import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions.js';


export const itemReducer = (state = {}, action) => {

  let newState = Object.assign({}, state);

  switch (action.type){
    case RECEIVE_SINGLE_POKEMON: return Object.assign(newState, action.payload.items);
    default: return state;
  }


};
