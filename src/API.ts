const BASE_URL = "https://recipe-app-server-teal.vercel.app";

type Ingredients = {
  id: string;
  original: string;
};

export type Recipe = {
  id: string;
  title: string;
  image: string;
  summary?: string;
  instructions?: string;
  extendedIngredients?: Ingredients[];
};

export type Recipes = {
  recipes: Recipe[];
};

type SearcrhedRecipes = {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
};

const apiSettings = {
  popularRecipes: async (): Promise<Recipes> => {
    const endpoint = `${BASE_URL}/popular`;
    return await (await fetch(endpoint)).json();
  },
  veggieRecipes: async (): Promise<Recipes> => {
    const veggieParams = new URLSearchParams({
      "include-tags": "vegetarian",
    });
    const endpoint = `${BASE_URL}/popular?${veggieParams.toString()}`;
    return await (await fetch(endpoint)).json();
  },
  cuisineRecipe: async (cuisineName: string): Promise<SearcrhedRecipes> => {
    const cuisineParams = new URLSearchParams({
      cuisine: cuisineName,
    });
    const endpoint = `${BASE_URL}/search?${cuisineParams.toString()}`;
    return await (await fetch(endpoint)).json();
  },
  searchRecipe: async (searchTerm: string): Promise<SearcrhedRecipes> => {
    const searchParams = new URLSearchParams({
      query: searchTerm,
    });
    const endpoint = `${BASE_URL}/search?${searchParams}`;
    return await (await fetch(endpoint)).json();
  },
  recipeInfo: async (recipeId: string): Promise<Recipe> => {
    const endpoint = `${BASE_URL}/info/${recipeId}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
