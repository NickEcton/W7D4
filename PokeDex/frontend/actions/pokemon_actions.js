export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
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

export const receiveSinglePokemon = (pokemon) => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    payload: pokemon
  };
};

export const requestSinglePokemon = (id) => dispatch => {
  return APIUtil.fetchSinglePokemon(id)
    .then((res) => dispatch(receiveSinglePokemon(res)));
};
