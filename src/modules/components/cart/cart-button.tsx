"use client";

import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";

const CartButton = () => {
  const [items, setItems] = useState(1);

  return (
    <Button className="relative" variant="ghost" size="icon" asChild>
      <Link href={routes.cart}>
        {items > 0 && (
          <>
            <span className="bg-destructive absolute top-[5] right-[1] size-2 rounded-full opacity-80" />
            <span className="bg-destructive absolute top-[5] right-[1] size-2 animate-ping rounded-full opacity-75" />
          </>
        )}
        <CiShoppingCart className="fill-foreground size-10" />
        <span className="text-accent-foreground absolute top-[10] right-[7] size-4 text-center text-xs font-bold">
          {items > 0 ? items : "-"}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
