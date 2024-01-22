import { useQuery } from '@tanstack/react-query'

const fetchPokemonData = async () => {
	const response = await fetch(import.meta.env.VITE_POKEMON_ENDPOINT)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return response.json()
}

const usePokemonData = () => {
	return useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemonData,
	})
}

export default usePokemonData
