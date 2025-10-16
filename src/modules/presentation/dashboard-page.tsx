import HeaderDashboard from "@/modules/components/layout/header-dashboard";
import DashboardSidebar from "@/modules/sidebar/dashboard-sidebar";

const DashboardPage = () => {
  return <div className="h-full w-full px-2 py-1">
    <HeaderDashboard />
    <div className="flex overflow-y-auto">
      <DashboardSidebar />
      <div className="flex w-full flex-col justify-between pt-[4rem] pb-[0rem]">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Dashboard Content</h2>
        </div>
      </div>
    </div>
  </div>;
};
export default DashboardPage;
