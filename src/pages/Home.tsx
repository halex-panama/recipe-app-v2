import { useHomeFetch } from "../hooks/useHomeFetch";
import { Grid } from "../styles/Grid";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. Please try again</div>;

  return (
    <>
      <h1>Popular Recipe</h1>
      <Grid>
        {state &&
          state.popular &&
          state.popular.map((item, index) => (
            <RecipeCard
              id={item.id}
              image={item.image}
              title={item.title}
              index={index}
            />
          ))}
      </Grid>
      <h1>Vegetarian Recipe</h1>
      <Grid>
        {state &&
          state.veggie &&
          state.veggie.map((item, index) => (
            <RecipeCard
              id={item.id}
              image={item.image}
              title={item.title}
              index={index}
            />
          ))}
      </Grid>
    </>
  );
};

export default Home;
