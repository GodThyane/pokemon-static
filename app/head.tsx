export default function Head({ title }: { title?: string }) {
   return (
      <>
         <title>{title || 'PokemonApp'}</title>
         <meta content="width=device-width, initial-scale=1" name="viewport" />
         <meta name="author" content="José Ismael Daza Díaz" />
         <meta name="description" content="Información sobre el pokemon XXXX" />
         <meta name="keywords" content="XXX, pokemon, pokedex" />
         <meta property="og:title" content="Información sobre pokemones" />
         <meta
            property="og:description"
            content="Página informativa de pokemones de la primera generación"
         />
         <meta
            property="og:image"
            content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
         />
         <link rel="icon" href="/favicon.ico" />
      </>
   );
}
