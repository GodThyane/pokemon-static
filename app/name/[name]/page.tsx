import React from 'react';
import { Pokemon } from '@/app/pokemon/models/pokemon.model';
import { getPokemon } from '@/app/pokemon/services/pokemon.id.service';
import PokemonInfoCard from '@/components/pokemon/PokemonInfoCard/PokemonInfoCard';
import { redirect } from 'next/navigation';
import { getPokemonList } from '@/app/services/pokemon.service';

interface Props {
   name: string;
}

const PokemonNamePage = async ({ params: { name } }: { params: Props }) => {
   const fetchPokemon: () => Promise<Pokemon | null> = async () => {
      try {
         return await getPokemon(name);
      } catch (error) {
         return null;
      }
   };
   const pokemon = await fetchPokemon();

   if (!pokemon) {
      redirect('/');
   }

   return <PokemonInfoCard pokemon={pokemon} />;
};

export default PokemonNamePage;

export async function generateStaticParams() {
   const { results } = await getPokemonList();
   const pokemonList = results.map((pokemon) => pokemon.name);
   return pokemonList.map((name) => ({ name }));
}
