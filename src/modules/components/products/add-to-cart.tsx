"use client";

import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Quantity from "@/modules/components/products/quantity";
import { PlusIcon, ShoppingCart } from "lucide-react";

const AddToCart = ({ handleAddToCart }: { handleAddToCart: () => void }) => {
  return (
    <div>
      {/* <div className="mb-6 block">
        <Quantity setQuantity={setQuantity} />
      </div> */}
      <Separator className="my-4" />
      <div className="mt-6 mb-4 flex flex-col gap-3">
        <Button
          size="default"
          className="font-semibold"
          onClick={handleAddToCart}
        >
          <PlusIcon className="size-3.5" />
          <span>Add to Cart</span>
        </Button>
        <Button
          variant="destructive"
          size="default"
          className="font-semibold text-black"
        >
          <ShoppingCart className="size-3.5" />
          <span>Buy Now</span>
        </Button>
      </div>
    </div>
  );
};

export default AddToCart;
