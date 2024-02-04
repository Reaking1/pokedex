import React from 'react';

interface AbilityListProps {
    abilities: any[];
}

const AbilityList: React.FC<AbilityListProps> = ({ abilities }) => {
    return (
        <div>
            <h3>Abilities</h3>
            <ul>
                {abilities.map((ability: any) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default AbilityList