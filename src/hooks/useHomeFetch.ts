import { useState, useEffect } from "react";

import API, { Recipe } from "../API";

type RecipeState = {
  popular: Recipe[];
  veggie: Recipe[];
};

export const useHomeFetch = () => {
  const [state, setState] = useState<RecipeState>({} as RecipeState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      setError(false);

      const homeCheck = sessionStorage.getItem("homeState");

      if (homeCheck) {
        setState(JSON.parse(homeCheck));
      } else {
        const popular = await API.popularRecipes();
        const veggie = await API.veggieRecipes();

        sessionStorage.setItem(
          "homeState",
          JSON.stringify({
            popular: popular.recipes,
            veggie: veggie.recipes,
          })
        );

        setState({
          popular: popular.recipes,
          veggie: veggie.recipes,
        });
      }

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    // setState({} as RecipeState);
    fetchRecipe();
  }, []);

  return { state, loading, error };
};
