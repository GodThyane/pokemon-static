import { Pokemon } from '@/app/pokemon/models/pokemon.model';

export const getPokemon = (
   id: string,
   revalidate: number = 86400
): Promise<Pokemon> => {
   const url = 'https://pokeapi.co/api/v2';
   return fetch(`${url}/pokemon/${id}`, {
      next: { revalidate: revalidate },
   })
      .then((response) => response.json())
      .then((data) => data);
};
