import React, { useEffect, useState } from 'react'
import {ApiService} from '../services/apiServices'
import AbilityList from './AbilityList';
import PokemonLocation from './PokemonLocation';
import '../App.css'
import './styles/PokemonDetails.css'

interface PokemonDetailProps {
    pokemonName: string;

}


const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemonName }) => {
    //Fetch and set detailed information about the seleceted Pokemon
    const [pokemonData, setPokemonData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      if(!pokemonName) return;
        const res = await ApiService.fetchPokemonDetails(pokemonName);
        setPokemonData(res);
       }
       fetchData();
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>
  }

  return (
    <div className='container'>
        <h2 className='header-one'>{pokemonName?`Details for ${pokemonName}` : 'No Pokemon selected'}</h2>
        <div className="image-container">
            <img src={pokemonData.imageUrl} alt={pokemonName} key={pokemonName} className="pokemon-image" />
        </div>
        <p className='header-one'>Type: {pokemonData.types.map((type: any) => type.type.name).join(', ')}</p>
         <p className='header-one'>Gender: {pokemonData.gender_rate === -1 ? 'Genderless' : 'Male/Female'}</p>
        <AbilityList abilities={pokemonData.abilities} />
        <PokemonLocation pokemonName={pokemonName} /> {/* Ensure pokemonName is defined */}
    </div>
  );
};

export default PokemonDetail