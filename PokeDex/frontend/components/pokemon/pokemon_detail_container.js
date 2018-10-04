import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors.js';
import { requestSinglePokemon } from '../../actions/pokemon_actions.js';
import PokemonIndex from './pokemon_index.jsx';
import PokemonDetail from './pokemon_detail.jsx';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
});

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
