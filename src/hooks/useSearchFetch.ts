import { useState, useEffect } from "react";

import API, { Recipe } from "../API";

const initialState = {
  results: [] as Recipe[],
  offset: 0,
  number: 0,
  totalResults: 0,
};

export const useSearchFetch = (searchTerm: string) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchSearchRecipe = async (searchTerm: string) => {
    try {
      setLoading(true);
      setError(false);

      const searchedRecipe = await API.searchRecipe(searchTerm);

      setState(searchedRecipe);

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSearchRecipe(searchTerm);
  }, [searchTerm]);

  return { state, loading, error };
};
