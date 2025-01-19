// src/store/favoritePokemons.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useFavoritePokemons = create(
    persist(
        (set, get) => ({
            favoritePokemons: [],

            // Add a Pokémon to favorites if it's not already present
            addFavorite: (pokemon) => {
                const currentFavorites = get().favoritePokemons;
                const exists = currentFavorites.some((f) => f.id === pokemon.id);
                if (!exists) {
                    set({ favoritePokemons: [...currentFavorites, pokemon] });
                }
            },

            // Remove a Pokémon by ID
            removeFavorite: (pokemonId) => {
                const updatedFavs = get().favoritePokemons.filter(
                    (f) => f.id !== pokemonId
                );
                set({ favoritePokemons: updatedFavs });
            },
        }),
        {
            name: 'favorite-pokemons', // key name in localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);
