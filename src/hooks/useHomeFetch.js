import { useState, useEffect } from "react";

import API from "../API";

import { isPersistedState } from "../helpers";

export const useHomeFetch = () => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      setError(false);

      const popular = await API.popularRecipes();
      const veggie = await API.veggieRecipes();

      setState({
        popular: popular.recipes,
        veggie: veggie.recipes,
      });

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    const sessionState = isPersistedState("home");

    if (sessionState && sessionState.length > 0) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    setState({});
    fetchRecipe();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("home", JSON.stringify(state));
  }, [state]);

  return { state, loading, error };
};
