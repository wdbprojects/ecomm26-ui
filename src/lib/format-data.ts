export const formatPrice = (price: number) => {
  if (!price) return 0;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  });
  return formatter.format(price / 100);
};
