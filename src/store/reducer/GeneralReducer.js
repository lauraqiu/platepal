import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipeId: "",
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RECIPE_ID:
      return {
        ...state,
        recipeId: action.recipeId,
      };

    default:
      return state;
  }
};

export default GeneralReducer;
