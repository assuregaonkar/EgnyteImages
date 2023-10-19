// reducers.js

import { UPDATE_IMAGES } from "./actions.js";

const initialState = {
  images: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
