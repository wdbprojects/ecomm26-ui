import { LayoutPropsMain } from "@/config/types";
import ProductDetailsLayout from "@/modules/layouts/product-details-layout";

const ProductDetailsLayoutMain = ({ children }: LayoutPropsMain) => {
  return <ProductDetailsLayout>{children}</ProductDetailsLayout>;
};

export default ProductDetailsLayoutMain;
