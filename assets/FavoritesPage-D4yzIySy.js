import{j as e,L as a}from"./index-BOxmo-E_.js";import{u as r,P as i}from"./PokemonCard-bgoWePt1.js";function x(){const{favoritePokemons:s,removeFavorite:o}=r(),l=t=>{o(t)};return e.jsxs("div",{className:"w-screen px-4 py-6",children:[e.jsx("h1",{className:"text-xl sm:text-2xl font-bold mb-4 text-center",children:"My Favorite Pokemons"}),s.length===0?e.jsxs("div",{className:"text-center ",children:[e.jsx("p",{className:"text-center text-yellow-600 mt-20 mb-10 text-lg sm:text-xl font-semibold",children:"No favorites yet 😓"}),e.jsxs(a,{to:"/",className:"rounded-2xl px-8 py-4  hover:text-white bg-blue-800 hover:bg-blue-600 active:bg-yellow-400 active:text-black font-bold",children:[e.jsx("span",{className:" text-lg md:text-xl",children:"🕵️"})," Find some!"]})]}):e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:s.map(t=>e.jsx(i,{...t,onAddToFavorites:()=>l(t.id)},t.id))})]})}export{x as default};
