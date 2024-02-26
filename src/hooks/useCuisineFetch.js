import { useState, useEffect } from "react";

import API from "../API";

import { isPersistedState } from "../helpers";

export const useCuisineFetch = (cuisineName) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCuisine = async (cuisineName) => {
    try {
      setLoading(true);
      setError(false);

      const cuisine = await API.cuisineRecipe(cuisineName);

      setState(cuisine.results);

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    const sessionState = isPersistedState(cuisineName);

    if (sessionState && sessionState.length > 0) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchCuisine();
  }, [cuisineName]);

  useEffect(() => {
    sessionStorage.setItem(cuisineName, JSON.stringify(state));
  }, [state, cuisineName]);

  return { state, loading, error };
};
