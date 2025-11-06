"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import ProductImages from "./product-images";
import Ratings from "./ratings";
import { formatPrice } from "@/lib/format-data";
import CollapsibleDescription from "./collapsible-description";
import SizesComp from "./sizes-comp";
import ColorsComp from "./colors-comp";
import { SingleProductType } from "@/config/types";
import AddToCart from "./add-to-cart";
import useCartStore from "@/stores/cart-store";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const ProductInteraction = ({
  selectedColor,
  selectedSize,
}: {
  selectedColor: string;
  selectedSize: string;
}) => {
  const [quantity, setQuantity] = useState(0);
  console.log({ quantity });

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        ...product,
        quantity: quantity,
        selectedSize: selectedSize,
        selectedColor: selectedColor,
      });
      toast.success("Product(s) added to cart");
    } else {
      toast.error("Please select a quantity");
    }
  };

  return (
    <>
      {/* LEFT */}
      <div className="col-span-12 h-full w-full rounded-sm border sm:order-1 sm:col-span-7 lg:col-span-5">
        <ProductImages images={product.images} selectedColor={selectedColor} />
      </div>
      {/* CENTER */}
      <div className="col-span-12 w-full rounded-sm border px-4 pt-1 sm:order-3 sm:col-span-12 lg:order-2 lg:col-span-4">
        {/* HEADER & TITLE */}
        <div className="flex flex-col">
          <h1 className="mb-2 text-2xl font-bold">Product Name</h1>
          <h3 className="mb-2 line-clamp-3 text-sm leading-5 tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            reiciendis delectus odio laborum quae culpa repellat modi, esse
            aliquid eum nihil vero atque nemo porro illum. Inventore quod atque
            tempore, aliquam velit quas vero iusto dicta voluptates rem
            perspiciatis quidem obcaecati odit voluptate illo ex soluta, natus
            laborum nesciunt neque?
          </h3>
        </div>

        {/* RATINGS & REVIEWS */}
        <div className="flex items-center justify-start gap-4">
          <Ratings />
          <span className="text-md text-muted-foreground">69 reviews</span>
        </div>
        <Separator className="my-4" />
        {/* PRICE */}
        <div className="mb-2">
          <span className="text-destructive mr-3 text-3xl font-light tracking-tight">
            -15%
          </span>
          <span className="mb-1 text-3xl font-semibold">
            {formatPrice(product.price)}
          </span>
          <div className="text-muted-foreground mt-1 text-xs font-bold">
            List Price:{" "}
            <span className="line-through">
              {formatPrice(product.price * 1.15)}
            </span>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="bg-background mx-0 mt-4 mb-2 w-full rounded px-0 pr-1 transition-all">
          <CollapsibleDescription description={product.description} />
        </div>
        <Separator className="mt-4 mb-2" />
        {/* SIZES */}
        <div className="block space-y-1">
          <h2 className="text-lg font-semibold tracking-wider">Size</h2>
          <SizesComp sizes={product.sizes} selectedSize={selectedSize} />
        </div>
        <Separator className="mt-4 mb-2" />
        {/* COLORS */}
        <div className="block space-y-1">
          <h2 className="text-lg font-semibold tracking-wider">Color</h2>
          <ColorsComp colors={product.colors} selectedColor={selectedColor} />
        </div>
        <Separator className="mt-4 mb-2" />
        <div className="block space-y-1">
          <h2 className="text-lg font-semibold tracking-wider">
            Product Details
          </h2>
          <ul className="text-sm">
            <li className="mb-1 grid grid-cols-[125px_1fr]">
              <span className="font-bold">Seller:</span> Abercrombie
            </li>
            <li className="mb-1 grid grid-cols-[125px_1fr]">
              <span className="font-bold">Category:</span> Shirts
            </li>
            <li className="mb-1 grid grid-cols-[125px_1fr]">
              <span className="font-bold">Sizes:</span> {product.sizes.flat()}
            </li>
            <li className="mb-1 grid grid-cols-[125px_1fr]">
              <span className="font-bold">SKU:</span> {product?.id}
            </li>
          </ul>
        </div>
      </div>
      {/* RIGHT */}
      <div className="col-span-12 w-full rounded-sm border p-1 px-4 sm:order-2 sm:col-span-5 lg:order-3 lg:col-span-3">
        <div className="price">
          <span className="text-2xl font-semibold">{formatPrice(496969)}</span>
        </div>
        <div className="text-xs">FREE delivery</div>
        <Separator className="my-2" />
        <div className="mb-4">
          <p className="mb-2 text-lg font-medium text-emerald-500">In stock!</p>
        </div>
        <Select
          onValueChange={(value) => {
            setQuantity(parseInt(value));
          }}
        >
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="Select Quantity"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1" className="cursor-pointer text-center">
                <span className="text-xs">QTY:</span>&nbsp;
                <span className="font-semibold">1</span>
              </SelectItem>
              <SelectItem value="2" className="cursor-pointer text-center">
                <span className="text-xs">QTY:</span>&nbsp;
                <span className="font-semibold">2</span>
              </SelectItem>
              <SelectItem value="3" className="cursor-pointer text-center">
                <span className="text-xs">QTY:</span>&nbsp;
                <span className="font-semibold">3</span>
              </SelectItem>
              <SelectItem value="4" className="cursor-pointer text-center">
                <span className="text-xs">QTY:</span>&nbsp;
                <span className="font-semibold">4</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="mb-4">
          <AddToCart handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </>
  );
};

export default ProductInteraction;
