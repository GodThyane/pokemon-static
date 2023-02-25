import React, { useEffect, useState } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '@/app/models/pokemon-list.model';
import { useRouter } from 'next/navigation';
import { checkFavorite } from '@/utils';

const PokemonCard = ({
   pokemon: { image, name, id },
}: {
   pokemon: SmallPokemon;
}) => {
   const router = useRouter();

   const handleOnClick = () => {
      router.push(`/pokemon/${id}`);
   };

   const [color, setColor] = useState('#ffffff');

   useEffect(() => {
      if (checkFavorite(id)) {
         setColor('#c98585');
      } else {
         setColor('#fff');
      }
   }, [id]);

   return (
      <Grid xs={6} sm={3} md={2} xl={1} key={id}>
         <Card
            isHoverable={true}
            isPressable={true}
            onClick={handleOnClick}
            css={{ $$cardColor: color }}
         >
            <Card.Body css={{ p: 1 }}>
               <Card.Image src={image} width="100%" height={140} />
            </Card.Body>
            <Card.Footer>
               <Row justify="space-between">
                  <Text transform="capitalize">{name}</Text>
                  <Text>#{id}</Text>
               </Row>
            </Card.Footer>
         </Card>
      </Grid>
   );
};

export default PokemonCard;
