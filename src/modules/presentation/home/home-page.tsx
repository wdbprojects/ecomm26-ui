import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full">
      <section className="relative w-full py-20">
        <div className="flex flex-col items-center justify-center space-y-8 mt-6">
          <Badge variant="outline">The future of Online Shopping</Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Elevate your shopping experience
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            Discover a new way to shop: curated collections and effortless style
            await. Your perfect fit is just a click away.
          </p>
          <div className="mt-8 flex w-full max-w-[450px] flex-col justify-between gap-4 sm:flex-row">
            <Button className="flex-1" variant="secondary" size="lg" asChild>
              <Link href={routes.dashboard}>Dashboard</Link>
            </Button>
            <Button className="flex-1" variant="default" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
