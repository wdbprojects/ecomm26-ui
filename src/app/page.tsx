import DarkMode from "@/components/shared/dark-mode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary">
        Welcome abundance and love
      </h2>
      <Button>Testing ShadCN</Button>
      <DarkMode />
    </div>
  );
}
