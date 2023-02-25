import pokeApi from '@/api/pokeApi';
import { PokeListRes } from '@/app/models/pokemon-list.model';
import { AxiosResponse } from 'axios';

export const fetchPokemonList = (
   limit: number = 151
): Promise<AxiosResponse<PokeListRes>> => {
   return pokeApi.get(`/pokemon?limit=${limit}`);
};
