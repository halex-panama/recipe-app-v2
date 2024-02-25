import { useState, useEffect } from "react";

import API from "../API";

export const useSearchFetch = (searchTerm) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchSearchRecipe = async () => {
    try {
      setLoading(true);
      setError(false);

      const searchedRecipe = await API.searchRecipe(searchTerm);

      setState(searchedRecipe.results);

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSearchRecipe();
  }, [searchTerm]);

  return { state, loading, error };
};
