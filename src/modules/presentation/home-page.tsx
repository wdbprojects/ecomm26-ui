import HeroSection from "@/modules/components/home/hero-section";
import { productList } from "@/lib/data";
import FeaturedProductsSection from "@/modules/components/home/featured-products-section";

const HomePage = ({ category }: { category: string }) => {
  return (
    <div className="w-full pb-20">
      {/* // INFO: HERO SECTION */}
      <HeroSection />
      {/* // INFO: FEATURED PRODUCTS SECTION */}
      <FeaturedProductsSection productList={productList} category={category} />
      {/* // INFO: HERO SECTION */}
      {/* // INFO: HERO SECTION */}
      {/* // INFO: HERO SECTION */}
    </div>
  );
};

export default HomePage;
