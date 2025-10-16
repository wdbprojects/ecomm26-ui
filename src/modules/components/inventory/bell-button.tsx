"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BellButton = () => {
  const [items, setItems] = useState(3);

  return (
    <Button className="relative" variant="ghost" size="icon">
      <Bell strokeWidth={1.5} className="size-7 stroke-foreground" />

      <Badge
        className="size-4 absolute top-[0] right-[0] text-white font-bold text-xs bg-destructive"
        variant="outline"
      >
        {items > 0 ? items : null}
      </Badge>
    </Button>
  );
};

export default BellButton;
