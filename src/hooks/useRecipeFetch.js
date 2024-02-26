import { useState, useEffect } from "react";

import API from "../API";

import { isPersistedState } from "../helpers";

export const useRecipeFetch = (recipeId) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipeInfo = async (recipeId) => {
    try {
      setLoading(true);
      setError(false);

      const recipeInfo = await API.recipeInfo(recipeId);

      setState(recipeInfo);

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    const sessionState = isPersistedState(recipeId);

    if (sessionState && sessionState.length > 0) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchRecipeInfo();
  }, [recipeId]);

  useEffect(() => {
    sessionStorage.setItem(recipeId, JSON.stringify(state));
  }, [recipeId, state]);

  return { state, loading, error };
};
