import { useState, useEffect } from "react";

import API, { Recipe } from "../API";

import { isPersistedState } from "../helpers";

const initialState = {
  results: [] as Recipe[],
  offset: 0,
  number: 0,
  totalResults: 0,
};

export const useCuisineFetch = (cuisineName: string) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCuisine = async (cuisineName: string) => {
    try {
      setLoading(true);
      setError(false);

      const cuisine = await API.cuisineRecipe(cuisineName);

      setState(cuisine);

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

    fetchCuisine(cuisineName);
  }, [cuisineName]);

  useEffect(() => {
    sessionStorage.setItem(cuisineName, JSON.stringify(state));
  }, [state, cuisineName]);

  return { state, loading, error };
};
