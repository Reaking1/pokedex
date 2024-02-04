const API_URL = 'https://pokeapi.co/api/v2';

export const ApiService = {
    fetchPokemonList: async () => {
        const res = await fetch(`${API_URL}/pokemon?limit=10`);
        return res.json()
    },

    fetchPokemonDetails: async (pokemonName: string) => {
        const res = await fetch(`${API_URL}/pokemon/${pokemonName}`)
        return res.json()
    }
}