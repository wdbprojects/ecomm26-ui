import { LayoutPropsMain } from "@/config/types";
import HeaderMain from "@/modules/components/layout/header-main";

const CartLayout = ({ children }: LayoutPropsMain) => {
  return (
    <div>
      <HeaderMain />
      <main className="container mx-auto px-2 pt-[4rem] md:px-3">
        {children}
      </main>
    </div>
  );
};

export default CartLayout;
