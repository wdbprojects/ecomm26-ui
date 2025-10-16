import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutPropsMain } from "@/config/types";

const ProductsLayout = ({ children }: LayoutPropsMain) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
export default ProductsLayout;
