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
    const endpoint = `${BASE_URL}/veggie`;
    return await (await fetch(endpoint)).json();
  },
  cuisineRecipe: async (cuisineName: string): Promise<SearcrhedRecipes> => {
    const endpoint = `${BASE_URL}/search?cuisine=${cuisineName}`;
    return await (await fetch(endpoint)).json();
  },
  searchRecipe: async (searchTerm: string): Promise<SearcrhedRecipes> => {
    const endpoint = `${BASE_URL}/search?query=${searchTerm}`;
    return await (await fetch(endpoint)).json();
  },
  recipeInfo: async (recipeId: string): Promise<Recipe> => {
    const endpoint = `${BASE_URL}/info/${recipeId}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
