"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ColorsComp = ({
  colors,
  selectedColor,
}: {
  colors: string[];
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleColorChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap items-center justify-start gap-3">
      {colors.map((color) => {
        return (
          <Button
            key={color}
            size="icon"
            variant="default"
            className={cn(
              "size-5 rounded-full p-2 transition",
              color === selectedColor &&
                "border-muted-foreground border-2 ring-inset",
            )}
            style={{ backgroundColor: color }}
            onClick={() => {
              handleColorChange("color", color);
            }}
          />
        );
      })}
    </div>
  );
};

export default ColorsComp;
