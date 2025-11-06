"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React, { useState } from "react";

const Ratings = () => {
  const [value, setValue] = useState(4);

  return (
    <div className="flex items-center justify-start gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <button
            key={star}
            onClick={() => {
              setValue(star);
            }}
            // className="cursor-pointer"
            disabled={true}
          >
            <Star
              className={cn("", star <= value && "fill-amber-300")}
              color="#fcd34d"
            />
          </button>
        );
      })}
    </div>
  );
};

export default Ratings;

<Star color="#d4c600" />;
