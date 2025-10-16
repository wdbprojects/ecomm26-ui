import { ProductListType } from "@/config/types";
import ProductCard from "@/modules/components/products/product-card";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import SimpleCategory from "@/modules/components/inventory/simple-category";

const FeaturedProductsSection = ({
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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

export default FeaturedProductsSection;
