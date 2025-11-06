"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductImages = ({
  images,
  selectedColor,
}: {
  images: Record<string, string>;
  selectedColor: string;
}) => {
  // const [mainIndex, setMainIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const imageArray = Object.entries(images);

  const handleColorChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="rounded-sm p-2">
      {/* MAIN IMAGE */}
      <div>
        <Image
          src={images[selectedColor]}
          alt="test alt"
          width={500}
          height={500}
          className="aspect-square"
        />
      </div>
      {/* THUMBNAILS */}
      <div className="mt-4 flex flex-row gap-4">
        {imageArray.map((image, index) => {
          return (
            <Image
              key={index}
              src={image[1]}
              alt="some text"
              width={150}
              height={150}
              className={cn(
                "object-fit aspect-square h-auto w-[80px] cursor-pointer rounded-sm",
                image[1] === images[selectedColor] &&
                  "border-primary border-2 shadow-md dark:shadow-white/30",
              )}
              onMouseEnter={() => {
                handleColorChange("color", image[0]);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
