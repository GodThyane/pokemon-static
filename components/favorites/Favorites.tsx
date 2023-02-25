'use client';

import React from 'react';
import { Grid } from '@nextui-org/react';
import FavoriteCardPokemon from '@/components/favorites/FavoriteCardPokemon';

const Favorites = ({
   favoritePokemonList,
}: {
   favoritePokemonList: number[];
}) => {
   return (
      <Grid.Container gap={2} justify="flex-start">
         {favoritePokemonList.map((id) => (
            <FavoriteCardPokemon id={id} key={id} />
         ))}
      </Grid.Container>
   );
};

export default Favorites;
