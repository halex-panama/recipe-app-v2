const BASE_URL = "https://recipe-app-server-teal.vercel.app";

const apiSettings = {
  popularRecipes: async () => {
    const endpoint = `${BASE_URL}/popular`;
    return await (await fetch(endpoint)).json();
  },
  veggieRecipes: async () => {
    const endpoint = `${BASE_URL}/veggie`;
    return await (await fetch(endpoint)).json();
  },
  cuisineRecipe: async (cuisineName) => {
    const endpoint = `${BASE_URL}/search?cuisine=${cuisineName}`;
    return await (await fetch(endpoint)).json();
  },
  searchRecipe: async (searchTerm) => {
    const endpoint = `${BASE_URL}/search?query=${searchTerm}`;
    return await (await fetch(endpoint)).json();
  },
  recipeInfo: async (recipeId) => {
    const endpoint = `${BASE_URL}/info/${recipeId}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
