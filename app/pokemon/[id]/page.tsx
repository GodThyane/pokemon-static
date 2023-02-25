import React from 'react';
import { getPokemon } from '@/app/pokemon/services/pokemon.id.service';
import { Pokemon } from '@/app/pokemon/models/pokemon.model';
import PokemonInfoCard from '@/components/pokemon/PokemonInfoCard/PokemonInfoCard';
import { redirect } from 'next/navigation';

interface Props {
   id: string;
}

const PokemonPage = async ({ params: { id } }: { params: Props }) => {
   const fetchPokemon: () => Promise<Pokemon | null> = async () => {
      try {
         return await getPokemon(id);
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

export default PokemonPage;

export async function generateStaticParams() {
   const pokemonList = [...Array(151)].map((_, i) => `${i + 1}`);
   return pokemonList.map((id) => ({ id }));
}
