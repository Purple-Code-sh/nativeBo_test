import { create } from 'zustand';

export const useHamburguerOpen = create((set, get) => ({

    hamburguerIsOpen: false,

    handleToggle: () => {
        const currentValue = get().hamburguerIsOpen;
        set({ hamburguerIsOpen: !currentValue });
    },

    closeHamburguer: () => {
        set({ hamburguerIsOpen: false });
    },

}));
