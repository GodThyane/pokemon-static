import './globals.css';
import React from 'react';
import Navbar from '@/components/ui/Navbar';

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="es">
         <head />
         <body>
            <Navbar />
            <main>{children}</main>
         </body>
      </html>
   );
}
