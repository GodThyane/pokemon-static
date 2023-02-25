'use client';

import React from 'react';
import { Grid } from '@nextui-org/react';
import { SmallPokemon } from '@/app/models/pokemon-list.model';
import PokemonCard from '@/components/pokemon/PokemonCard/PokemonCard';

const PokemonList = ({ pokemonList }: { pokemonList: SmallPokemon[] }) => {
   return (
      <Grid.Container gap={2} justify="flex-start">
         {pokemonList.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id}></PokemonCard>
         ))}
      </Grid.Container>
   );
};

export default PokemonList;
