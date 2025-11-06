import ProductsSidebar from "@/modules/sidebar/products-sidebar";
import HeaderProducts from "@/modules/components/layout/header-products";
import { productList } from "@/lib/data";
import ProductsList from "@/modules/components/products/products-list";

const ProductsPage = () => {
  return (
    <div className="h-full w-full px-2 py-1">
      <HeaderProducts />
      <div className="flex overflow-y-auto">
        <ProductsSidebar />
        <div className="flex w-full flex-col justify-between pt-[4rem] pb-[0rem]">
          <div className="flex-1">
            <ProductsList productList={productList} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
