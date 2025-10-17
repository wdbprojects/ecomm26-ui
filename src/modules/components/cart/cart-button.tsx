"use client";

import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import useCartStore from "@/stores/cart-store";

const CartButton = () => {
  const { cart, hasHydrated } = useCartStore();
  const cartItems = cart.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  if (!hasHydrated) return null;

  return (
    <Button className="relative" variant="ghost" size="icon" asChild>
      <Link href={routes.cart}>
        {cartItems > 0 && (
          <>
            <span className="bg-destructive absolute top-[5] right-[1] size-2 rounded-full opacity-80" />
            <span className="bg-destructive absolute top-[5] right-[1] size-2 animate-ping rounded-full opacity-75" />
          </>
        )}
        <CiShoppingCart className="fill-foreground size-10" />
        <span className="text-accent-foreground absolute top-[10] right-[7] size-4 text-center text-xs font-bold">
          {cartItems > 0 ? cartItems : "-"}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
