"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { categoryList } from "@/lib/data";
import { ShoppingBasket } from "lucide-react";

const SimpleCategory = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");
  const params = new URLSearchParams(searchParams);
  const handleParamsChange = (value: string | null) => {
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const handleClearParams = () => {
    router.push(pathname);
  };

  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-2 gap-1 rounded-sm sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
        <Button
          variant="outline"
          size="default"
          className={cn(
            "w-full text-sm",
            selectedCategory === null &&
              "!bg-background text-accent-foreground",
          )}
          onClick={handleClearParams}
        >
          {<ShoppingBasket />}
          <span>All</span>
        </Button>
        {categoryList.map((cat) => {
          return (
            <div key={cat.id}>
              <Button
                variant="outline"
                size="default"
                className={cn(
                  "w-full text-xs",
                  selectedCategory?.toLowerCase() === cat.name.toLowerCase() &&
                    "!bg-background text-accent-foreground",
                )}
                onClick={() => {
                  handleParamsChange(cat.name.toLowerCase());
                }}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleCategory;
