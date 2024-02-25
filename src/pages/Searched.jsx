import { Link, useParams } from "react-router-dom";
import { useSearchFetch } from "../hooks/useSearchFetch";
import { Grid } from "../styles/Grid";
import { Card, Gradient } from "../styles/Card";
import Spinner from "../components/Spinner";

const Searched = () => {
  const { search } = useParams();

  const { state, loading, error } = useSearchFetch(search);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. Please try again</div>;

  return (
    <div>
      <Grid>
        {state && state.length > 0 ? (
          state.map((item) => (
            <Card key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} />
                <Gradient />
              </Link>
            </Card>
          ))
        ) : (
          <div>No data found</div>
        )}
      </Grid>
    </div>
  );
};

export default Searched;
