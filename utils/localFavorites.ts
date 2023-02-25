const toggleFavorite = (id: number) => {
   console.log('toggleFavorite called');

   let favorites: number[] = getFavorites();

   if (favorites.includes(id)) {
      favorites = favorites.filter((fav) => fav !== id);
   } else {
      favorites.push(id);
   }

   localStorage.setItem('favorites', JSON.stringify(favorites));
};

const getFavorites = (): number[] => {
   return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const checkFavorite = (id: number): boolean => {
   const favorites: number[] = getFavorites();

   return favorites.includes(id);
};

export { toggleFavorite, checkFavorite, getFavorites };
