import DarkMode from "@/components/shared/dark-mode";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { routes } from "@/config/routes";
import { KeySquare } from "lucide-react";
import Link from "next/link";

const HeaderDashboard = async () => {
  return (
    <header className="bg-background fixed top-0 right-0 z-50 h-16 w-full flex items-center justify-between border-b px-2 py-2">
      <div className="container mx-auto flex w-full items-center justify-between gap-1 sm:gap-2">
        {/* //INFO: MENU & LOGO  & NAV LINKS*/}
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-shrink-0 items-center gap-2 p-1">
            <SidebarTrigger />
            <Link href={routes.home} className="flex flex-row items-center gap-0">
              <h6 className="text-primary text-xl font-bold tracking-tight">Micca</h6>
              <h6 className="text-foreground text-xl font-bold tracking-tight">Mart</h6>
            </Link>
          </div>
        </div>
        {/* //INFO: BUTTONS & AUTH */}
        <div className="flex flex-shrink-0 items-center gap-3 p-1">
          <DarkMode />
          <Button variant="default" size="sm" asChild>
            <Link href={routes.home}>
              <KeySquare className="size-3.5" />
              <span>Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default HeaderDashboard;
