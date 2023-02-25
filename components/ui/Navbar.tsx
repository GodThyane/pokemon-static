'use client';

import './Navbar.css';

import React from 'react';
import { Image, Spacer, Text, useTheme } from '@nextui-org/react';
import Link from 'next/link';

const Navbar = () => {
   const { theme } = useTheme();

   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray900.value,
         }}
      >
         <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
         />
         <Link href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
            <Text color="white" h2>
               P
            </Text>
            <Text color="white" h3>
               okémon
            </Text>
         </Link>
         <Spacer css={{ flex: 1 }} />

         <Link href={'/favorites'}>
            <Text color="white">Favoritos</Text>
         </Link>
      </div>
   );
};

export default Navbar;
