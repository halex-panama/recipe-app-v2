import { Link, useParams } from "react-router-dom";
import { useCuisineFetch } from "../hooks/useCuisineFetch";
import { Grid } from "../styles/Grid";
import { Card, Gradient } from "../styles/Card";
import Spinner from "../components/Spinner";

const Cuisine = () => {
  const { cuisineName } = useParams();

  const { state, loading, error } = useCuisineFetch(cuisineName);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. Please try again</div>;

  return (
    <div>
      <Grid>
        {state &&
          state.length > 0 &&
          state.map((item) => (
            <Card key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} />
                <Gradient />
              </Link>
            </Card>
          ))}
      </Grid>
    </div>
  );
};

export default Cuisine;
