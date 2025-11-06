"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

const Quantity = ({
  setQuantity,
}: {
  setQuantity: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Select
      onValueChange={(value) => {
        setQuantity(parseInt(value));
      }}
      defaultValue={"3"}
    >
      <SelectTrigger className="w-full cursor-pointer">
        <SelectValue placeholder="Select Quantity"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1" className="cursor-pointer text-center">
            <span className="text-xs">QTY:</span>&nbsp;
            <span className="font-semibold">1</span>
          </SelectItem>
          <SelectItem value="2" className="cursor-pointer text-center">
            <span className="text-xs">QTY:</span>&nbsp;
            <span className="font-semibold">2</span>
          </SelectItem>
          <SelectItem value="3" className="cursor-pointer text-center">
            <span className="text-xs">QTY:</span>&nbsp;
            <span className="font-semibold">3</span>
          </SelectItem>
          <SelectItem value="4" className="cursor-pointer text-center">
            <span className="text-xs">QTY:</span>&nbsp;
            <span className="font-semibold">4</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Quantity;
