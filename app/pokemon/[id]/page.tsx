import React from 'react';
import { fetchPokemon } from '@/app/pokemon/services/pokemon.id.service';
import { Pokemon } from '@/app/pokemon/models/pokemon.model';
import PokemonInfoCard from '@/components/pokemon/PokemonInfoCard/PokemonInfoCard';

interface Props {
   id: string;
}

const PokemonPage = async ({ params: { id } }: { params: Props }) => {
   const getPokemon: () => Promise<Pokemon> = async () => {
      const { data } = await fetchPokemon(id);
      return data;
   };

   const pokemon = await getPokemon();

   return <PokemonInfoCard pokemon={pokemon} />;
};

export default PokemonPage;

export async function generateStaticParams() {
   const pokemonList = [...Array(151)].map((_, i) => `${i + 1}`);
   return pokemonList.map((id) => ({ id }));
}
