import React from 'react';
import { fetchPokemonList } from '@/app/services/pokemon.service';
import { SmallPokemon } from '@/app/models/pokemon-list.model';
import PokemonList from '@/components/pokemon/PokemonList/PokemonList';

export default async function HomePage() {
   const getPokemonList: () => Promise<SmallPokemon[]> = async () => {
      const { data } = await fetchPokemonList();
      return data.results.map((pokemon: SmallPokemon, index) => ({
         ...pokemon,
         id: index + 1,
         image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
         }.svg`,
      }));
   };

   const pokemonList = await getPokemonList();

   return (
      <>
         <PokemonList pokemonList={pokemonList} />
      </>
   );
}
