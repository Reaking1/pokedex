const API_URL = 'https://pokeapi.co/api/v2';

export const ApiService = {
    fetchPokemonList: async () => {
        const res = await fetch(`${API_URL}/pokemon?limit=30`);
        return res.json()
    },

    fetchPokemonDetails: async (pokemonName: string) => {
        const res = await fetch(`${API_URL}/pokemon/${pokemonName}`)
        return res.json()
    },

    fetchPokemonLocationAndRegion: async (pokemonName: string) => {
        const res = await fetch(`/pokemon/${pokemonName}/encounters`);
        
        // Extracting locations and regions
        const encounters = await res.json();
    
        const locations = encounters.map((encounter: any) => encounter.location_area);
        const regions = locations.map((location: any) => location.region_name);
    
        return {
          locations: locations.map((location: any) => location.name),
          regions: Array.from(new Set(regions)), // Deduplicate regions
        };
      },
    };
