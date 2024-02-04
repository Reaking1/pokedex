import React, { useEffect, useState } from 'react'
import {ApiService} from '../services/apiServices'
import AbilityList from './AbilityList';

interface PokemonDetailProps {
    pokemonName: string;

}


const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemonName }) => {
    //Fetch and set detailed information about the seleceted Pokemon
    const [pokemonData, setPokemonData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
        const res = await ApiService.fetchPokemonDetails(pokemonName);
        setPokemonData(res);
       }
       fetchData();
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <h2>{pokemonName?`Details for ${pokemonName}` : 'No Pokemon selected'}</h2>
        <p>Type: {pokemonData.types.map((type: any) => type.type.name).join(', ')}</p>
         <p>Gender: {pokemonData.gender_rate === -1 ? 'Genderless' : 'Male/Female'}</p>
        <AbilityList abilities={pokemonData.abilities} />
    </div>
  );
};

export default PokemonDetail