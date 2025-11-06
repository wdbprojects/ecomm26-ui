import { LayoutPropsMain } from "@/config/types";
import HeaderProducts from "@/modules/components/layout/header-products";

const ProductDetailsLayout = ({ children }: LayoutPropsMain) => {
  return (
    <div className="w-full">
      <HeaderProducts />
      <main className="container mx-auto w-full px-2 pt-[4rem] md:px-3">
        {children}
      </main>
    </div>
  );
};

export default ProductDetailsLayout;
