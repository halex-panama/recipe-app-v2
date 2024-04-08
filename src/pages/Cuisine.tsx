import { Link, useParams } from "react-router-dom";
import { useCuisineFetch } from "../hooks/useCuisineFetch";
import { Grid } from "../styles/Grid";
import { Card, CardImg } from "../styles/Card";
import Spinner from "../components/Spinner";
import { fadeInCardVariant } from "../helpers";

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
            <Card
              initial="initial"
              whileInView="animate"
              variants={fadeInCardVariant}
              custom={index}
              key={item.id}
            >
              <Link to={`/recipe/${item.id}`}>
                <CardImg
                  whileHover={{ scale: 1.1 }}
                  src={item.image}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </Link>
            </Card>
          ))}
      </Grid>
    </>
  );
};

export default Cuisine;
