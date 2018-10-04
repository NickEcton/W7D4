class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(poke_params)
    debugger
    if @pokemon.save!
      render :index
    else
      render :errors
    end
  end

  def poke_params
    params.require(:pokemon).permit(:name, :type, :attack, :defense, :moves, :image_url, :poke_type)
  end

end
