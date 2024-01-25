import {
	QueryClient,
	useMutation,
	useQuery,
	useQueryClient,
	UseQueryResult,
} from '@tanstack/react-query'

const fetchPokemonData = async (): Promise<any> => {
	const response = await fetch(import.meta.env.VITE_POKEMON_ENDPOINT)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return response.json()
}

// const postPokemonData = async (params: any): Promise<any> => {
// 	const response = await fetch(import.meta.env.VITE_POKEMON_ENDPOINT, {
// 		method: 'POST',
// 		body: JSON.stringify(params),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})

// 	if (!response.ok) {
// 		throw new Error('Network response was not ok')
// 	}
// 	return response.json()
// }

const usePokemonData = (): UseQueryResult<any> => {
	return useQuery<any>({
		queryKey: ['pokemon'],
		queryFn: fetchPokemonData,
	})
	// const queryClient = useQueryClient()

	// const mutation = useMutation({
	//   mutationFn: postPokemonData,
	//   onSuccess: () => {
	//     queryClient.invalidateQueries({ queryKey: ['todos'] })
	//   }
	// })

	// return mutation
}

export default usePokemonData
