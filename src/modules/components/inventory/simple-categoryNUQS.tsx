"use client";

import { useQueryState } from "nuqs";
import { createSerializer, parseAsString } from "nuqs/server";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { categoryList } from "@/lib/data";

const SimpleCategory = () => {
  const [category, setCategory] = useQueryState("category", {
    shallow: false,
    history: "push",
  });
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  console.log(selectedCategory);
  console.log(category);

  const nuqsSearchParams = {
    category: parseAsString,
    sortBy: parseAsString,
  };

  const serialize = createSerializer(nuqsSearchParams);
  const url = new URL("http://localhost:3000/products?category=all");

  return (
    <div className="w-full">
      <Button
        variant="link"
        size="sm"
        disabled={category === null}
        onClick={() => {
          setCategory(null);
        }}
      >
        Clear filters
      </Button>
      <div className="gap-4rounded-sm grid w-full grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {categoryList.map((cat) => {
          return (
            <div key={cat.id} className="flex h-10 items-center justify-center">
              <Button
                variant="outline"
                size="default"
                className={cn(
                  "w-full",
                  category === cat.name.toLowerCase() && "bg-muted",
                )}
                onClick={() => {
                  setCategory(cat.name.toLowerCase());
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
