// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useParams} from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import AbilityList from './components/AbilityList';
import PokemonLocation from './components/PokemonLocation';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/pokemon/:name" element={<PokemonDetailWrapper />} />
          <Route path='/pokemon/ability' element={<AbilityList abilities={[]}/>} />
          <Route path="/" element={<PokemonList />} />
          <Route path='/pokemon/location' element={<PokemonLocation pokemonName=''/>} />
          
        </Routes>
      </div>
    </Router>
    
  );
};
const PokemonDetailWrapper: React.FC = () => {
  const { name } = useParams<{ name?: string }>();
  // Use a default value if 'name' is undefined
  const pokemonName = name || '';

  return <PokemonDetail pokemonName={pokemonName} />;
};
export default App;
