import React,{ useEffect, useState } from 'react'
import { ApiService } from '../services/apiServices'

interface PokemonLocationProps {
    pokemonName: string
}


const PokemonLocation: React.FC<PokemonLocationProps> = ({ pokemonName}) => {
    const [locationData, setLoctionData] = useState<any>(null)

    useEffect(() => {
        const fetchLocationData = async () => {
            try {
                const res = await ApiService.fetchPokemonLocationAndRegion(pokemonName);
                setLoctionData(res)
            } catch (error) {
                console.log('Error fecthing Pokemon Loaction:', error)
            }
        };
        fetchLocationData();
    }, [pokemonName]);

    if(!locationData) {
        return <div>Loading location data...</div>
    }

    return (
       <div>
         <h2>{pokemonName?`Loaction for ${pokemonName}` : 'No Pokemon selected'}</h2>
        <p>Location: {locationData.locationName}</p>
       </div>
    )
}

export default PokemonLocation