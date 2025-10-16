"use client";

import { formatPrice } from "@/lib/format-data";
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cartItems } from "@/lib/placeholder-data";

const CartItems = () => {
  const subTotal = cartItems.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);
  const totalStock = cartItems.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  return (
    <>
      <div className="flex flex-col justify-between border-b px-2 pb-4 sm:px-4">
        {totalStock === 0 && (
          <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
        )}
        {totalStock > 1 && (
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        )}
        <div className="flex items-center justify-between">
          <p className="text-sm">
            <span className="font-semibold">{totalStock}</span> products
            currently in your cart
          </p>
          <span className="mr-2 hidden text-right text-sm font-semibold sm:block">
            Price
          </span>
        </div>
      </div>

      {/* CART ITEMS */}
      {cartItems.map((item) => {
        const { id, colors, images, price, quantity, sizes } = item;
        return (
          <div className="pr-2" key={id}>
            <div className="my-4 grid h-auto w-full grid-cols-12 gap-4 px-2 pt-2 pb-2 sm:px-4">
              {/* left */}
              <Link
                href="#"
                className="order-1 col-span-12 block sm:col-span-3"
              >
                <Image
                  src={images[item.selectedColor]}
                  width={300}
                  height={300}
                  alt={item.name}
                  className="aspect-square max-w-[160px] object-contain"
                />
              </Link>
              {/* right */}
              <div className="order-3 col-span-12 pb-0 sm:col-span-7">
                <Link href="#">
                  <h3 className="mb-0 text-lg leading-5 font-medium"></h3>
                </Link>
                <span className="text-sm font-medium text-orange-700 italic">
                  Only 5 left in stock - order soon
                </span>
                <div className="item-center flex-start mb-0 flex h-5 gap-0 pb-0 sm:gap-4">
                  <div className="flex-start mb-0 flex h-5 items-center gap-0 pb-0 sm:gap-4">
                    <div className="text-foreground mt-0 mr-[4px] mb-0 text-sm">
                      Unit price:{" "}
                      <span className="mb-0 font-semibold">
                        {formatPrice(price)}
                      </span>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="mt-0 mb-0 ml-[4px] text-sm">
                      Quantity:{" "}
                      <span className="mb-0 font-semibold">{quantity}</span>
                    </div>
                  </div>
                </div>
                <span className="text-muted-foreground my-0 text-xs italic">
                  Eligible for free shipping
                </span>
                {/* sizes & colors */}

                <ul className="text-foreground mt-1 mb-2 text-xs">
                  <li>
                    <span className="font-semibold">Size:</span>{" "}
                    {item.selectedSize.toUpperCase()}
                  </li>
                  <li>
                    <span className="font-semibold">Color:</span>{" "}
                    {item.selectedColor}
                  </li>
                </ul>

                {/* select & info */}
                <div className="mt-2 flex h-5 flex-wrap items-center justify-start gap-4">
                  <div className="min-w-[150px]">
                    <Select onValueChange={() => {}} defaultValue={"1"}>
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Change quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={"1"} className="cursor-pointer">
                            <span className="text-xs">QTY:</span>{" "}
                            <span className="font-semibold">1</span>
                          </SelectItem>
                          <SelectItem value={"2"} className="cursor-pointer">
                            <span className="text-xs">QTY:</span>{" "}
                            <span className="font-semibold">2</span>
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-2 sm:leading-4">
                    <Button
                      variant="link"
                      className="text-destructive text-xs font-medium"
                      size="sm"
                      onClick={() => {}}
                    >
                      Delete
                    </Button>
                    <Button
                      size="sm"
                      variant="link"
                      onClick={() => {}}
                      className="text-muted-foreground text-xs"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              {/* price */}
              <div className="order-2 col-span-12 text-left text-lg font-bold sm:order-3 sm:col-span-2 sm:text-right">
                {formatPrice(price * quantity)}
              </div>
            </div>
            <Separator />
          </div>
        );
      })}

      {/* SUBTOTALS */}
      <div className="bg-muted mt-4 rounded-sm px-1 py-4 text-right">
        <h4 className="hidden px-4 text-lg tracking-wide lg:block">
          Subtotal <strong>{totalStock}</strong> items:{" "}
          <span className="font-semibold">{formatPrice(subTotal)}</span>
        </h4>
      </div>
    </>
  );
};

export default CartItems;
