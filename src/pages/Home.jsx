import { useHomeFetch } from "../hooks/useHomeFetch";
import Slider from "../components/Slider";
import Spinner from "../components/Spinner";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. Please try again</div>;

  return (
    <>
      <Slider key="popular" header="Popular Recipe" data={state.popular} />
      <Slider key="veggie" header="Our Veggie Choice" data={state.veggie} />
    </>
  );
};

export default Home;
