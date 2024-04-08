import { useState, useEffect } from "react";

import API, { Recipe } from "../API";

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

      const cuisineCheck = sessionStorage.getItem(cuisineName);

      if (cuisineCheck) {
        setState(JSON.parse(cuisineCheck));
      } else {
        const cuisine = await API.cuisineRecipe(cuisineName);

        sessionStorage.setItem(cuisineName, JSON.stringify(cuisine));

        setState(cuisine);
      }

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCuisine(cuisineName);
  }, [cuisineName]);

  return { state, loading, error };
};
