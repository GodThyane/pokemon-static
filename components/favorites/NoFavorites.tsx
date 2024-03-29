'use client';

import React from 'react';
import { Container, Image, Text } from '@nextui-org/react';

const NoFavorites = () => {
   return (
      <Container
         css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
         }}
      >
         <Text h1 color="white">
            No hay favoritos
         </Text>
         <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            alt="No hay favoritos"
            width={250}
            height={250}
            css={{
               opacity: 0.1,
            }}
         ></Image>
      </Container>
   );
};

export default NoFavorites;
