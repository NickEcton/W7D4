export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
import * as APIUtil from '../util/api_util.js';

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon()
    .then((res) => dispatch(receiveAllPokemon(res)))
);
