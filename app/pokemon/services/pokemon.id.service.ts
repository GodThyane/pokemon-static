import pokeApi from '@/api/pokeApi';
import { AxiosResponse } from 'axios';
import { Pokemon } from '@/app/pokemon/models/pokemon.model';

export const fetchPokemon = (id: string): Promise<AxiosResponse<Pokemon>> => {
   return pokeApi.get<Pokemon>(`/pokemon/${id}`);
};
