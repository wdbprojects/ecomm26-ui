import SingleProductBreadcrumbs from "@/modules/components/products/breadcrumbs";
import { SingleProductType } from "@/config/types";
import ProductInteraction from "../components/products/product-interaction";

const product: SingleProductType = {
  id: 5,
  name: "Under Armour StormFleece",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing.",
  price: 49900,
  sizes: ["s", "m", "l", "xl"],
  colors: ["red", "orange", "black"],
  images: {
    red: "/products/5r.png",
    orange: "/products/5o.png",
    black: "/products/5bl.png",
  },
};

const ProductDetails = async ({
  searchParams,
}: {
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className="">
      <div className="mt-1">
        <SingleProductBreadcrumbs />
      </div>
      <div className="mt-1 grid w-full grid-cols-12 justify-between gap-2">
        <ProductInteraction
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
