"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { SingleProductType } from "@/config/types";
import { CiShoppingCart } from "react-icons/ci";
import SelectSizes from "@/modules/components/products/select-sizes";
import SelectColors from "@/modules/components/products/select-colors";

const ProductCard = ({ product }: { product: SingleProductType }) => {
  const { name, shortDescription, price, sizes, colors, images } = product;
  const [productTypes, setProductTypes] = useState({
    size: sizes[0],
    color: colors[0],
  });

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  return (
    <Card className="w-full gap-1 space-y-0 rounded-sm border-none pt-0 pb-2">
      <CardHeader className="overflow-hidden px-0">
        <Link href="/">
          <div className="relative aspect-5/6 w-full">
            <Image
              src={images[productTypes.color]}
              fill
              alt={name}
              className="w-full rounded-t-sm transition-all duration-300 hover:scale-105"
            />
            <span className="bg-background/90 text-foreground absolute top-1 right-1 rounded-sm px-2 py-0.5 text-sm font-bold">
              $ {price.toFixed(2)}
            </span>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-2">
        <h2 className="text-md line-clamp-1 font-medium tracking-tight">
          {name}
        </h2>
        <p className="line-clamp-2 text-sm leading-tight tracking-tight">
          {shortDescription}
        </p>
        <div className="g-4 mt-2 flex flex-row items-center justify-between">
          <SelectSizes sizes={sizes} handleProductType={handleProductType} />
          <SelectColors
            colors={colors}
            handleProductType={handleProductType}
            productTypes={productTypes}
          />
        </div>
      </CardContent>

      <CardAction className="mt-3 w-full px-2">
        <Button
          className="flex w-full items-center justify-center"
          size="sm"
          variant="default"
        >
          <CiShoppingCart className="size-4.5" />
          <span>Add to cart</span>
        </Button>
      </CardAction>
    </Card>
  );
};

export default ProductCard;
