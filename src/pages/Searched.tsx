import { useParams } from "react-router-dom";
import { useSearchFetch } from "../hooks/useSearchFetch";
import { Grid } from "../styles/Grid";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";

const Searched = () => {
  const { search } = useParams();

  const { state, loading, error } = useSearchFetch(search as string);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. Please try again</div>;

  return (
    <>
      <h1>Search result for: {search}</h1>
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

export default Searched;
