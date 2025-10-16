import { ProductListType } from "@/config/types";
import ProductCard from "@/modules/components/products/product-card";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import SimpleCategory from "@/modules/components/inventory/simple-category";
import SimpleFilter from "@/modules/components/products/simple-filter";

const ProductsList = ({
  productList,
  category,
}: {
  productList: ProductListType;
  category: string;
}) => {
  return (
    <section className="relative w-full">
      <div className="mt-6 flex flex-col items-center justify-center space-y-4 px-3 sm:space-y-6 sm:px-4 md:space-y-8">
        <SimpleCategory />
        <SimpleFilter />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {productList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
      <div className="flex w-full flex-row justify-end p-4">
        <Button asChild variant="link" size="sm">
          <Link
            className="text-sm"
            href={category ? routes.productCategory(category) : routes.products}
          >
            View all products
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ProductsList;
