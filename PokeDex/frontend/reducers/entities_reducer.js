import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon_reducer.js';

export const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
});
