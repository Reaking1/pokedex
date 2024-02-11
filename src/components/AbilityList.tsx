import React from 'react';
import  './styles/PokemonDetails.css'
interface AbilityListProps {
    abilities: any[];
}

const AbilityList: React.FC<AbilityListProps> = ({ abilities }) => {
    return (
        <div >
            <h3 className='header-one'>Abilities</h3>
            <ul className='list-style'>
                {abilities.map((ability: any) => (
                    <li key={ability.ability.name} >{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default AbilityList