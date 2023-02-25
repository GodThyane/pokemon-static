import { PokeListRes } from '@/app/models/pokemon-list.model';

export const getPokemonList = (limit: number = 151): Promise<PokeListRes> => {
   const url = 'https://pokeapi.co/api/v2';
   return fetch(`${url}/pokemon?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => data);
};
