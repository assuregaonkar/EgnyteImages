// reducers.js

import { ACTIVE_EXPERIMENT } from "./action";

const initialState = {
  experiment: [],
};

const ActiveExperiment = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_EXPERIMENT:
      return {
        ...state,
        experiment: action.payload,
      };
    default:
      return state;
  }
};

export default ActiveExperiment;
