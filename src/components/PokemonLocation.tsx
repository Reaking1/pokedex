// PokemonLocation.tsx
import React, { useEffect, useState } from 'react';
import { ApiService } from '../services/apiServices';
import './styles/PokemonDetails.css'

interface PokemonLocationProps {
    pokemonName: string;
}

const PokemonLocation: React.FC<PokemonLocationProps> = ({ pokemonName }) => {
    const [locationData, setLocationData] = useState<any>(null);

    useEffect(() => {
        const fetchLocationData = async () => {
            try {
                const res = await ApiService.fetchPokemonLocationAndRegion(pokemonName);
                setLocationData(res);
            } catch (error) {
                console.log('Error fetching Pokemon Location:', error);
                setLocationData({ locations: [], regions: [] }); // Set default values if error occurs
            }
        };
        fetchLocationData();
    }, [pokemonName]);

    if (!locationData) {
        return <div>Loading location data...</div>;
    }

    return (
        <div className='location footer'>
            <h2 className='footer-head'>{pokemonName ? `Location for ${pokemonName}` : 'No Pokemon selected'}</h2>
            <p>Locations: {locationData.locations ? locationData.locations.join(', ') : 'None'}</p>
            <p>Regions: {locationData.regions ? locationData.regions.join(', ') : 'None'}</p>
        </div>
    );
};

export default PokemonLocation;
