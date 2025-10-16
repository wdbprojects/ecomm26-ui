"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SimpleFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex w-full items-center justify-end gap-4">
      <Select onValueChange={handleFilterChange}>
        <SelectTrigger className="w-[auto] min-w-[160px] cursor-pointer">
          <SelectValue placeholder="Sort by:" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filters</SelectLabel>
            <SelectItem value="pricelow" className="cursor-pointer">
              Price: Low to High
            </SelectItem>
            <SelectItem value="pricehigh" className="cursor-pointer">
              Price: High to Low
            </SelectItem>
            <SelectItem value="newest" className="cursor-pointer">
              Newest
            </SelectItem>
            <SelectItem value="oldest" className="cursor-pointer">
              Oldest
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SimpleFilter;
