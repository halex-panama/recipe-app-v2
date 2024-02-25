const apiKey = process.env.REACT_APP_API_KEY;

const apiSettings = {
  popularRecipes: async () => {
    const endpoint = `https://api.spoonacular.com/recipes/random?number=8&offsset=0&apiKey=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
  veggieRecipes: async () => {
    const endpoint = `https://api.spoonacular.com/recipes/random?number=8&offsset=0&include-tags=vegetarian&apiKey=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
  cuisineRecipe: async (cuisineName) => {
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineName}&number=8&offsset=0&apiKey=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
  searchRecipe: async (searchTerm) => {
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=8&offsset=0&apiKey=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
  recipeInfo: async (recipeId) => {
    const endpoint = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
