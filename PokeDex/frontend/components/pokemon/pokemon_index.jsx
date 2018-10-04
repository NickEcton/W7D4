import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item.jsx';
import PokemonDetail from './pokemon_detail.jsx';
import PokemonDetailContainer from './pokemon_detail_container.js';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className="container">
        <div className="index">
          <ul>
              {this.props.pokemon.map( (pokemon) => (
                < PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
            ))}
          </ul>
        </div>

        <Route path='/pokemon/:pokemonId' component ={PokemonDetailContainer} />

      </div>
    );
  }
}

export default PokemonIndex;
