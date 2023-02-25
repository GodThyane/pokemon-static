'use client';

import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { Pokemon } from '@/app/pokemon/models/pokemon.model';
import { checkFavorite, toggleFavorite } from '@/utils';

import confetti from 'canvas-confetti';

const PokemonInfoCard = ({ pokemon }: { pokemon: Pokemon }) => {
   const [isInFavorites, setIsInFavorites] = useState(false);

   useEffect(() => {
      setIsInFavorites(checkFavorite(pokemon.id));
   }, [pokemon.id]);
   const onToggleFavorite = () => {
      toggleFavorite(pokemon.id);
      setIsInFavorites(!isInFavorites);

      if (!isInFavorites) {
         confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
               x: 1,
               y: 0,
            },
         });
      }
   };

   return (
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
         <Grid xs={12} sm={4}>
            <Card isHoverable={true} css={{ padding: '30px' }}>
               <Card.Body>
                  <Card.Image
                     src={
                        pokemon.sprites.other?.dream_world.front_default ||
                        '/no-image.png'
                     }
                     alt={pokemon.name}
                     width="100%"
                     height={200}
                  ></Card.Image>
               </Card.Body>
            </Card>
         </Grid>

         <Grid xs={12} sm={8}>
            <Card>
               <Card.Header
                  css={{ display: 'flex', justifyContent: 'space-between' }}
               >
                  <Text h1 transform="capitalize">
                     {pokemon.name}
                  </Text>
                  <Button
                     color="gradient"
                     ghost={!isInFavorites}
                     onPress={onToggleFavorite}
                  >
                     {isInFavorites
                        ? 'Remove from favorites'
                        : 'Add to favorites'}
                  </Button>
               </Card.Header>
               <Card.Body>
                  <Text size={30}>Sprites:</Text>
                  <Container direction="row" display="flex" gap={0}>
                     <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                     ></Image>
                     <Image
                        src={pokemon.sprites.back_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                     ></Image>
                     <Image
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                     ></Image>
                     <Image
                        src={pokemon.sprites.back_shiny}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                     ></Image>
                  </Container>
               </Card.Body>
            </Card>
         </Grid>
      </Grid.Container>
   );
};
export default PokemonInfoCard;
