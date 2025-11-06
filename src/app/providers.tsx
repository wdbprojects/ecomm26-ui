import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { LayoutPropsMain } from "@/config/types";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const Providers = ({ children }: LayoutPropsMain) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <NextTopLoader showSpinner={false} color="#f59e0a" />
      <NuqsAdapter>{children}</NuqsAdapter>
      <Toaster richColors closeButton position="bottom-right" expand={true} />
    </ThemeProvider>
  );
};
export default Providers;
