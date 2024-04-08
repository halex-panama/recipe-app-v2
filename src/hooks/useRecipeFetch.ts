import { useState, useEffect } from "react";

import API, { Recipe } from "../API";

export const useRecipeFetch = (recipeId: string) => {
  const [state, setState] = useState({} as Recipe);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipeInfo = async (recipeId: string) => {
    try {
      setLoading(true);
      setError(false);

      const recipeInfoCheck = sessionStorage.getItem(recipeId);

      if (recipeInfoCheck) {
        setState(JSON.parse(recipeInfoCheck));
      } else {
        const recipeInfo = await API.recipeInfo(recipeId);

        sessionStorage.setItem(recipeId, JSON.stringify(recipeInfo));

        setState(recipeInfo);
      }

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipeInfo(recipeId);
  }, [recipeId]);

  return { state, loading, error };
};
