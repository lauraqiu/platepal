import * as actionType from "./actionTypes";

export const storeRecipeId = (recipeId) => {
  return {
    type: actionType.STORE_RECIPE_ID,
    recipeId,
  };
};
