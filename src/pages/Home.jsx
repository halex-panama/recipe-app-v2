import React from "react";
import { useHomeFetch } from "../hooks/useHomeFetch";
import Slider from "../components/Slider";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  return (
    <>
      <Slider key="popular" header="Popular Recipe" data={state.popular} />
      <Slider key="veggie" header="Our Veggie Choice" data={state.veggie} />
    </>
  );
};

export default Home;
