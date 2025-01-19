/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'type-grass': '#3CA324',
        'type-fire': '#E22A29',
        'type-water': '#2981EF',
        'type-electric': '#FABE07',
        'type-flying': '#86B5F4',
        'type-normal': '#A0A19D',
        'type-ground': '#924A1A',
        'type-rock': '#B0A880',
        'type-psychic': '#E84278',
        'type-bug': '#91A11C',
        'type-poison': '#963FCD',
        'type-fighting': '#FF7D00',
        'type-ice': '#3CD9FF',
        'type-ghost': '#704070',
        'type-dark': '#50413E',
        'type-steel': '#62A3AD',
        'type-dragon': '#5060E0',
        'type-fairy': '#EF6BF4',
      }
    },
  },
  plugins: [],
}

