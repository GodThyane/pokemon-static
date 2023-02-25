import React from 'react';
import { SmallPokemon } from '@/app/models/pokemon-list.model';
import PokemonList from '@/components/pokemon/PokemonList/PokemonList';
import { getPokemonList } from '@/app/services/pokemon.service';

export default async function HomePage() {
   const fetchPokemonList: () => Promise<SmallPokemon[]> = async () => {
      const { results } = await getPokemonList();
      return results.map((pokemon: SmallPokemon, index) => ({
         ...pokemon,
         id: index + 1,
         image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
         }.svg`,
      }));
   };

   const pokemonList = await fetchPokemonList();

   return (
      <>
         <PokemonList pokemonList={pokemonList} />
      </>
   );
}
