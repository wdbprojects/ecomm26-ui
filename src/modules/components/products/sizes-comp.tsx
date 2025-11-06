"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SizesComp = ({
  sizes,
  selectedSize,
}: {
  sizes: string[];
  selectedSize: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSizeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap items-center justify-start gap-3">
      {sizes.map((size) => {
        return (
          <Button
            key={size}
            size="icon"
            variant="outline"
            className={cn(
              "size-7 rounded-sm p-2 text-base uppercase transition",
              size === selectedSize &&
                "border-muted-foreground text-primary border-2 font-semibold ring-inset",
            )}
            onClick={() => {
              handleSizeChange("size", size);
            }}
          >
            {size}
          </Button>
        );
      })}
    </div>
  );
};

export default SizesComp;
