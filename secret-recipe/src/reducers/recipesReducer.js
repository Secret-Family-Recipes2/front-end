import { FETCH_RECIPES, FETCH_RECIPES_SUCCESS } from "../actions/index";

const initialState = {
  data: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default recipesReducer;
