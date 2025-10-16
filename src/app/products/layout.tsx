import { LayoutPropsMain } from "@/config/types";
import ProductsLayout from "@/modules/layouts/products-layout";

const ProductsLayoutMain = ({ children }: LayoutPropsMain) => {
  return <ProductsLayout>{children}</ProductsLayout>;
};
export default ProductsLayoutMain;
