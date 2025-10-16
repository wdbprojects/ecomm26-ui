import { cn } from "@/lib/utils";
import React from "react";

const SelectColors = ({
  colors,
  handleProductType,
  productTypes,
}: {
  colors: string[];
  handleProductType: (arg: { type: "size" | "color"; value: string }) => void;
  productTypes: { size: string; color: string };
}) => {
  return (
    <div className="text-xs">
      <h2 className="text-muted-foreground mb-1.5 text-right">Colors</h2>
      <div className="flex-no-wrap flex flex-row items-center justify-end gap-2">
        {colors.map((color) => {
          return (
            <div
              key={color}
              className={cn(
                `cursor-pointer rounded-full border-1 border-transparent p-[1px]`,
                color === productTypes.color && `border-gray-400`,
              )}
              onClick={() => {
                handleProductType({ type: "color", value: color });
              }}
            >
              <div
                className="size-[14px] rounded-full"
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectColors;
