import { useState, useEffect } from "react";

import API, { Recipe } from "../API";

import { isPersistedState } from "../helpers";

export const useRecipeFetch = (recipeId: string) => {
  const [state, setState] = useState({} as Recipe);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipeInfo = async (recipeId: string) => {
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

    fetchRecipeInfo(recipeId);
  }, [recipeId]);

  useEffect(() => {
    sessionStorage.setItem(recipeId, JSON.stringify(state));
  }, [recipeId, state]);

  return { state, loading, error };
};
