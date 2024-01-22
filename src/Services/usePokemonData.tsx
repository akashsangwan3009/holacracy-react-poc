import { useQuery, UseQueryResult } from '@tanstack/react-query';

const fetchPokemonData = async (): Promise<any> => {
  const response = await fetch(import.meta.env.VITE_POKEMON_ENDPOINT);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const usePokemonData = (): UseQueryResult<any> => {
  return useQuery<any>({
    queryKey: ['pokemon'],
    queryFn: fetchPokemonData,
  });
};

export default usePokemonData;