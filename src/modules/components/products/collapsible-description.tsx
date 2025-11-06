"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CollapsibleDescription = ({ description }: { description: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="bg-secondary w-full space-y-2 rounded-sm transition"
    >
      <div className="mb-0 flex w-full items-center justify-between">
        <h3 className="px-2 py-1 text-lg font-semibold">Description</h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <span className="text-sm">{isOpen ? "Close" : "Open"}</span>
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      {/* <Separator /> */}
      <CollapsibleContent className="border-t px-2 pt-1 pb-2 transition-all">
        <p className="text-sm">{description}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleDescription;
