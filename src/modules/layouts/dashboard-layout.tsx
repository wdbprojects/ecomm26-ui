import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutPropsMain } from "@/config/types";

const DashboardLayout = ({ children }: LayoutPropsMain) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
export default DashboardLayout;
