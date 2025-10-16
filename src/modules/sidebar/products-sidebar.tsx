import { Sidebar } from "@/components/ui/sidebar";

const ProductsSidebar = () => {
  return (
    <Sidebar
      className="z-40 rounded border-none pt-18"
      variant="floating"
      collapsible="offcanvas"
    >
      <div className="p-4">
        <h2>Products Filters</h2>
      </div>
    </Sidebar>
  );
};
export default ProductsSidebar;
