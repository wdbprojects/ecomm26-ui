import { create } from "zustand";
import { CartStoreActionsType, CartStoreStateType } from "@/config/types";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        hasHydrated: false,
        addToCart: (product) =>
          set((state) => {
            const existingIndex = state.cart.findIndex((prod) => {
              return (
                prod.id === product.id &&
                prod.selectedSize === product.selectedSize &&
                prod.selectedColor === product.selectedColor
              );
            });
            if (existingIndex !== -1) {
              const updatedCart = [...state.cart];
              updatedCart[existingIndex].quantity += product.quantity || 1;
              return { cart: updatedCart };
            }
            return {
              cart: [
                ...state.cart,
                {
                  ...product,
                  quantity: product.quantity,
                  selectedSize: product.selectedSize,
                  selectedColor: product.selectedColor,
                },
              ],
            };
          }),
        removeFromCart: (product) =>
          set((state) => {
            return {
              cart: state.cart.filter((item) => {
                return !(
                  item.id === product.id &&
                  item.selectedSize === product.selectedSize &&
                  item.selectedColor === product.selectedColor
                );
              }),
            };
          }),
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => {
          return localStorage;
        }),
        onRehydrateStorage: () => {
          return (state) => {
            if (state) {
              state.hasHydrated = true;
            }
          };
        },
      },
    ),
  ),
);

export default useCartStore;
