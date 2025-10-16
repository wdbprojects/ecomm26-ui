"use client";

import { ChangeEvent, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchInputProps } from "@/config/types";
import { cn } from "@/lib/utils";
import { SearchIcon, XIcon } from "lucide-react";
import debounce from "debounce";
import { useQueryState } from "nuqs";

function debounceFunc<T extends (...args: never[]) => unknown>(
  func: T,
  wait: number,
  opts: { immediate: boolean },
) {
  return debounce(func, wait, opts);
}

const SearchInput = (props: SearchInputProps) => {
  const { className, ...rest } = props;
  const [q, setSearch] = useQueryState("q", { shallow: false });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(
    debounceFunc(
      (value: string) => {
        setSearch(value || null);
      },
      100,
      { immediate: true },
    ),
    [],
  );

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    handleSearch(newValue);
  };

  const clearSearch = () => {
    setSearch(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <form className="flex-1">
      <div className="relative mx-auto w-full max-w-[600px]">
        <SearchIcon className="text-muted-foreground absolute top-2.5 left-2.5 size-4" />
        <Input
          className={cn(className, "pl-8")}
          ref={inputRef}
          defaultValue=""
          type="search"
          {...rest}
          onChange={handleOnChange}
        />
        {q && (
          <Button
            variant="ghost"
            className="group absolute top-1.5 right-2.5 z-100 size-6"
            size="icon"
            onClick={clearSearch}
          >
            <XIcon className="size-4 text-muted-foreground group-hover:text-foreground" />
          </Button>
        )}
      </div>
    </form>
  );
};

export default SearchInput;
