import { LayoutPropsMain } from "@/config/types"
import DashboardLayout from "@/modules/layouts/dashboard-layout"

const DashboarLayoutMain = ({ children }: LayoutPropsMain) => {
  return (
    <DashboardLayout>{children}</DashboardLayout>
  )
}
export default DashboarLayoutMain