import React from 'react';
import PokemonIndex from './pokemon_index.jsx';


class PokemonDetail extends React.Component {
  componentDidMount() {
      let pokemonId = this.props.match.params.pokemonId;
      this.props.requestSinglePokemon(pokemonId);
  }

  componentWillReceiveProps(newProps) {

    // if (this.props.history.location.pathname != this.props.match.url) {
    if (this.props.match.params.pokemonId != newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }

  }

    render() {
      if (!this.props.pokemon) return null;
      return (
        <div className="detail">
          <img src={this.props.pokemon.image_url}/>
          <p id="name">{this.props.pokemon.name}</p>
          <p>Type: {this.props.pokemon.poke_type}</p>
          <p>Attack: {this.props.pokemon.attack}</p>
          <p>Defense: {this.props.pokemon.defense}</p>
          <p>Moves: {this.props.pokemon.moves}</p>
          <div>
            <p>{this.props.pokemon.item_ids}</p>
          </div>
        </div>
      );
    }
}
export default PokemonDetail;
