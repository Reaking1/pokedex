import React, { useState, useEffect} from 'react'
import {ApiService} from '../services/apiServices'
import { Link } from 'react-router-dom';

const PokemonList: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<string[]>([]);

    useEffect(() => {
        //Fecth and set the lsit of Pokemon from API
        const fetchData = async () => {
            const response = await ApiService.fetchPokemonList();
            setPokemonList(response.results.map((pokemon: any) => pokemon.name))
        };
        fetchData();
    }, []);


    return (
        <div>
            <h2>Pokkemon List</h2>
            <ul>
                {pokemonList.map((pokemonName) => (
                    <li key={pokemonName}>
                             {/* Use Link to make the Pokemon name clickable */}
            <Link to={`/pokemon/${pokemonName}`}>{pokemonName}</Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default PokemonList