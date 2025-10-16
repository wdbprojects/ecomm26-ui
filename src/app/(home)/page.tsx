import HomePage from "@/modules/presentation/home-page";
import { PageProps } from "@/config/types";

const Home = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  const category = Array.isArray(searchParams?.category)
    ? searchParams.category[0]
    : (searchParams?.category ?? "");

  return <HomePage category={category} />;
};

export default Home;
