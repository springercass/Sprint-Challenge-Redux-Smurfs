import {
  FETCHING_SMURFS,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADD_SMURFS
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: null
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADD_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        error: null
      };
    default:
      return state;
  }
};

export default rootReducer;
