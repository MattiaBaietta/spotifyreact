import { ADD_FAVOURITES, REMOVE_FAVOURITES } from "../action";

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(
          (song) => song !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favouritesReducer;