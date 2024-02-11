import React, { useState, useEffect } from 'react';
import { ApiService } from '../services/apiServices';
import { Link } from 'react-router-dom';
import './styles/PokemonList.css';

const PokemonList: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<string[]>([]);

    useEffect(() => {
        // Fetch and set the list of Pokémon from API
        const fetchData = async () => {
            const response = await ApiService.fetchPokemonList();
            setPokemonList(response.results.map((pokemon: any) => pokemon.name));
        };
        fetchData();
    }, []);

    return (
        <div className="pokemon-list-container">
            <h2>Pokémon List</h2>
            <div className="d-flex flex-wrap">
                {/* Wrap each Pokémon name with a flex container */}
                {pokemonList.map((pokemonName) => (
                    <div key={pokemonName} className="pokemon-box">
                        {/* Use Link to make the Pokémon name clickable */}
                        <Link to={`/pokemon/${pokemonName}`} className="pokemon-link">{pokemonName}</Link>
                     
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonList;

