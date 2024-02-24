import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useCuisineFetch } from "../hooks/useCuisineFetch";
import { Grid } from "../styles/Grid";
import { Card, Gradient } from "../styles/Card";

const Cuisine = () => {
  const { cuisineName } = useParams();

  const { state, loading, error } = useCuisineFetch(cuisineName);

  return (
    <div>
      <Grid>
        {state && state.length > 0 ? (
          state.map((item) => (
            <Card key={item.id}>
              <p>{item.title}</p>
              <img src={item.image} alt={item.title} />
              <Gradient />
            </Card>
          ))
        ) : (
          <div>No data found</div>
        )}
      </Grid>
    </div>
  );
};

export default Cuisine;
