import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/api_util.js';
import { requestAllPokemon } from './actions/pokemon_actions.js';
import configureStore from './store/store.js';
import { selectAllPokemon } from './reducers/selectors.js';

import Root from './components/root.jsx'


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store = {store}/>,
    rootEl);


  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
