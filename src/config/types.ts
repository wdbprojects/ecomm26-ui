import { InputHTMLAttributes, ReactNode } from "react";

type Params = {
  slug: string;
};

export type PageProps = {
  params?: Promise<Params>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type LayoutPropsMain = {
  children: ReactNode;
};

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export type SingleProductType = {
  id: number | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductListType = SingleProductType[];

export type CartItemType = SingleProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export interface FormatPriceArgs {
  price: number | null;
}

/* ZUSTAND - CONTEXT MANANGER */

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
