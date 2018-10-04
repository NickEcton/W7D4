import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon_reducer.js';
import { itemReducer } from './items_reducer.js';


export const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemReducer
});
