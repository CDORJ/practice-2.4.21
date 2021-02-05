import { ADD_SMURF, FETCHING_SMURFS, GOT_SMURFS, NO_SMURFS } from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GOT_SMURFS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        // smurfs: [...state.smurfs, action.payload]
        smurfs: action.payload,
      };
    }
    case ADD_SMURF: {
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: false,
        error: false,
      };
    }
    case NO_SMURFS: {
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    }

    default:
      return state;
  }
};
