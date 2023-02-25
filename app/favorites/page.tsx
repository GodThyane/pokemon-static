'use client';

import React, { useEffect, useState } from 'react';
import NoFavorites from '@/components/favorites/NoFavorites';
import { getFavorites } from '@/utils';
import Favorites from '@/components/favorites/Favorites';

const FavoritesPage = () => {
   const [favoritePokemonList, setFavoritePokemonList] = useState<number[]>([]);

   useEffect(() => {
      setFavoritePokemonList(getFavorites());
   }, []);

   return (
      <>
         {favoritePokemonList.length > 0 ? (
            <Favorites favoritePokemonList={favoritePokemonList} />
         ) : (
            <NoFavorites />
         )}
      </>
   );
};

export default FavoritesPage;
