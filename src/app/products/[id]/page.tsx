import ProductDetails from "@/modules/presentation/product-details-page";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  // TODO: get product from DB
  return {
    title: "Adidas CoreFit T-Shirt",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing.",
  };
};

const ProductDetailsMain = async ({
  searchParams,
}: {
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  return <ProductDetails searchParams={searchParams} />;
};

export default ProductDetailsMain;
