import { useHomeFetch } from "../hooks/useHomeFetch";
import { Grid } from "../styles/Grid";
import { Card, CardImg } from "../styles/Card";
import { Link } from "react-router-dom";
import { fadeInCardVariant } from "../helpers";
import Spinner from "../components/Spinner";

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
      <h1>Vegetarian Recipe</h1>
      <Grid>
        {state &&
          state.veggie &&
          state.veggie.map((item, index) => (
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

export default Home;
