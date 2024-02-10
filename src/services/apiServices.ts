const API_URL = 'https://pokeapi.co/api/v2';

export const ApiService = {
    fetchPokemonList: async () => {
        const res = await fetch(`${API_URL}/pokemon?limit=30`);
        return res.json()
    },

    fetchPokemonDetails: async (pokemonName: string) => {
        const res = await fetch(`${API_URL}/pokemon/${pokemonName}`);
        const data = await res.json();


        //Extract the image URL from the res data
        const imageUrl = data.sprites.front_default;


        //Extract the image encounetrs to get the location
        const encountersRes = await fetch(`${API_URL}/pokemon/${pokemonName}/encounters`)
      const encounterData = await encountersRes.json();

      //Extract the locations from the encounters data
      const locations = encounterData.map((encounter: any) => encounter.location_area.name)
        //Return res data along the image URL and location
        return { ...data, imageUrl, locations};
        
    },

    fetchPokemonLocationAndRegion: async (pokemonName: string) => {
      const res = await fetch(`${API_URL}/pokemon/${pokemonName}/encounters`); // Added API base URL
        
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
