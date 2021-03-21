export const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

const SpoonacularAPI = {
  GET_RANDOM: "/recipes/random/",
  GET_RECIPE_BULK: "/recipes/informationBulk",
  GET_RECIPE: "/recipes/{id}/information",
};

export default SpoonacularAPI;
