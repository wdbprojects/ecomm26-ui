export const routes = {
  home: "/",
  dashboard: "/dashboard",
  products: "/products",
  productCategory: (slug: string) => {
    return `/products?category=${slug}`;
  },
  cart: "/cart",
};
