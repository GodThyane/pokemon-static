export interface SmallPokemon {
   name: string;
   url: string;
   id: number;
   image: string;
}

export interface PokeListRes {
   count: number;
   next?: string;
   previous?: any;
   results: SmallPokemon[];
}
