import React from 'react';
import { fetchPokemonList } from '@/app/services/pokemon.service';
import { Pokemon } from '@/app/pokemon/models/pokemon.model';
import { fetchPokemon } from '@/app/pokemon/services/pokemon.id.service';
import PokemonInfoCard from '@/components/pokemon/PokemonInfoCard/PokemonInfoCard';

interface Props {
   name: string;
}

const PokemonNamePage = async ({ params: { name } }: { params: Props }) => {
   const getPokemon: () => Promise<Pokemon> = async () => {
      const { data } = await fetchPokemon(name);
      return data;
   };

   const pokemon = await getPokemon();

   return <PokemonInfoCard pokemon={pokemon} />;
};

export default PokemonNamePage;

export async function generateStaticParams() {
   const { data } = await fetchPokemonList();
   const pokemonList = data.results.map((pokemon) => pokemon.name);
   return pokemonList.map((name) => ({ name }));
}
