"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { cartItems, steps } from "@/lib/placeholder-data";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/format-data";
import { ShippingFormSchemaType } from "@/config/schemas";
import CartItems from "@/modules/components/cart/cart-items";
import CartShipping from "@/modules/components/cart/cart-shipping";
import CartPayment from "@/modules/components/cart/cart-payment";

const CartPage = () => {
  const [shippingForm, setShippingForm] =
    useState<ShippingFormSchemaType | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");

  const handleFlow = () => {
    router.push("/cart?step=2", { scroll: false });
  };

  const subTotal = cartItems.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);
  const totalStock = cartItems.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  return (
    <div className="h-full w-full px-2 py-1">
      {/* STEPS FLOW */}
      <div className="mt-6 flex flex-col items-center justify-center gap-4 py-2 sm:flex-row">
        {steps.map((step) => {
          return (
            <Card
              key={step.id}
              className={cn(
                "text-muted-foreground flex h-[120px] w-full items-center justify-center rounded-sm px-8 shadow-none",
                activeStep === step.id &&
                  "border-ring ring-ring/50 text-foreground shadow-sm ring-[3px]",
              )}
            >
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="flex items-center justify-center">
                  <span
                    className={cn(
                      "bg-muted h-[25px] w-[25px] rounded-full pt-0.5 text-center text-sm text-neutral-400",
                      activeStep === step.id &&
                        "bg-primary text-foreground font-semibold",
                    )}
                  >
                    {step.id}
                  </span>
                </div>
                <p className="text-md text-center font-semibold">
                  {step.title}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
      {/* STEPS & DETAILS */}
      <div className="mt-8 grid w-full grid-cols-12 gap-4">
        {/* details */}
        <Card className="bg-background col-span-12 gap-0 rounded-sm p-4 shadow-none md:col-span-8">
          {/* header */}
          {/* content */}
          <CardContent>
            {activeStep === 1 ? (
              <CartItems />
            ) : activeStep === 2 ? (
              <CartShipping
                activeStep={activeStep}
                setShippingForm={setShippingForm}
              />
            ) : activeStep === 3 /* && shippingForm */ ? (
              <CartPayment activeStep={activeStep} />
            ) : (
              <p className="text-destructive text-sm italic">
                Please fill in the shipping form!
              </p>
            )}
          </CardContent>
        </Card>
        {/* checkout */}
        <Card className="col-span-12 flex flex-col rounded-sm border px-4 pt-1 pb-4 shadow-sm md:col-span-4">
          {/* SUBTOTALS */}
          <div className="bg-muted mt-4 flex flex-col gap-2 rounded-sm p-4 text-right">
            <h4 className="flex items-center justify-between px-2 text-sm tracking-wide">
              <span>
                Subtotal <strong>{totalStock}</strong> items:
              </span>{" "}
              <span className="font-medium">{formatPrice(subTotal)}</span>
            </h4>
            <h4 className="flex items-center justify-between px-2 text-sm tracking-wide">
              <span>Discount (10%): </span>
              <span className="text-destructive font-medium">$10,00</span>
            </h4>
            <h4 className="flex items-center justify-between px-2 text-sm tracking-wide">
              <span>Shipping Fee:</span>{" "}
              <span className="font-medium">$10,69</span>
            </h4>
            <Separator className="" />
            <h4 className="mt-0 flex items-center justify-between px-2 text-lg tracking-wide">
              <span>Total:</span>{" "}
              <span className="font-bold">
                {formatPrice(subTotal - 1000 + 1069)}
              </span>
            </h4>
          </div>
          {/* checkout button */}
          {activeStep === 1 && (
            <div className="">
              <Button
                onClick={handleFlow}
                size="default"
                variant="default"
                className="flex w-full items-center justify-center gap-3 text-sm font-semibold"
              >
                <ArrowRight />
                <span>Continue </span>
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CartPage;
