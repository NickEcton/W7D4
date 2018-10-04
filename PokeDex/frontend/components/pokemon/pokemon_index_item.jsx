import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  render() {
    let link = `/pokemon/${this.props.pokemon.id}`;

    return (
    <div>
      <Link to={link}>
        <li key={this.props.pokemon.id}>
          <span>
            <img src = {this.props.pokemon.image_url}/>   
            {this.props.pokemon.name}
          </span>
        </li>
      </Link>
    </div>
  );
  }
}

export default PokemonIndexItem;
