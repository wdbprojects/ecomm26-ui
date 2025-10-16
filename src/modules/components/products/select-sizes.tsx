const SelectSizes = ({
  sizes,
  handleProductType,
}: {
  sizes: string[];
  handleProductType: (arg: { type: "size"; value: string }) => void;
}) => {
  return (
    <div className="text-xs">
      <h2 className="text-muted-foreground mb-1.5">Sizes</h2>
      <select
        name="size"
        id="size"
        className="ring-muted cursor-pointer rounded-md px-2 py-1 text-center text-xs ring"
        onChange={(event) => {
          handleProductType({ type: "size", value: event.target.value });
        }}
      >
        <option className="text-xs">Choose...</option>
        {sizes.map((size, index) => {
          return (
            <option key={index} value={size} className="mx-auto">
              {size.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectSizes;
