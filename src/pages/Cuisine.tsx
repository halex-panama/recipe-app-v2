import { useParams } from "react-router-dom";
import { useCuisineFetch } from "../hooks/useCuisineFetch";
import { Grid } from "../styles/Grid";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";

const Cuisine = () => {
  const { cuisineName } = useParams();

  const { state, loading, error } = useCuisineFetch(cuisineName as string);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. Please try again</div>;

  return (
    <>
      <h1>{cuisineName}</h1>
      <Grid>
        {state &&
          state.results &&
          state.results.map((item, index) => (
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

export default Cuisine;
