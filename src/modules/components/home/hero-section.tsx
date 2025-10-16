import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-20 pb-10">
      <div className="mt-6 flex flex-col items-center justify-center space-y-4 px-3 sm:space-y-6 sm:px-4 md:space-y-8">
        <Badge variant="outline">The future of Online Shopping</Badge>
        <h1 className="text-center text-xl font-bold tracking-tight sm:text-3xl md:text-5xl">
          Elevate your shopping experience
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-center md:text-xl">
          Discover a new way to shop: curated collections and effortless style
          await. Your perfect fit is just a click away.
        </p>
        <div className="mt-8 flex w-full max-w-[450px] flex-col justify-between gap-4 sm:flex-row">
          <Button
            className="min-h-[30px] flex-1"
            variant="secondary"
            size="lg"
            asChild
          >
            <Link href={routes.dashboard}>Dashboard</Link>
          </Button>
          <Button
            className="min-h-[30px] flex-1"
            variant="default"
            size="lg"
            asChild
          >
            <Link href={routes.products}>Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
