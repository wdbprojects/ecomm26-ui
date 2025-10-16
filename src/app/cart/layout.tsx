import { LayoutPropsMain } from "@/config/types";
import CartLayout from "@/modules/layouts/cart-layout";

const CartLayoutMain = ({ children }: LayoutPropsMain) => {
  return <CartLayout>{children}</CartLayout>;
};

export default CartLayoutMain;
