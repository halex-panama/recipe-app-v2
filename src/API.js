const apiKey = process.env.REACT_APP_API_KEY;

const apiSettings = {
  popularRecipes: async () => {
    const endpoint = `https://api.spoonacular.com/recipes/random?number=4&offsset=0&apiKey=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
  veggieRecipes: async () => {
    const endpoint = `https://api.spoonacular.com/recipes/random?number=4&offsset=0&include-tags=vegetarian&apiKey=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
  cuisineRecipe: async (cuisineName) => {
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineName}&number=4&offsset=0&apiKey=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
