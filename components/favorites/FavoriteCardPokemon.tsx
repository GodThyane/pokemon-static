import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const FavoriteCardPokemon = ({ id }: { id: number }) => {
   const router = useRouter();

   const onFavoriteClick = () => {
      router.push(`/pokemon/${id}`);
   };

   return (
      <Grid xs={6} sm={3} md={2} xl={1}>
         <Card
            isHoverable={true}
            isPressable={true}
            css={{ padding: 10 }}
            onPress={onFavoriteClick}
         >
            <Card.Image
               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
               alt="Pokemon"
               width={'100%'}
               height={140}
            />
         </Card>
      </Grid>
   );
};

export default FavoriteCardPokemon;
