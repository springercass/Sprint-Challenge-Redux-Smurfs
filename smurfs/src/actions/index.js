import axios from "axios";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const getSmurf = smurfs => dispatch => {
  axios
    .get("http://localhost:3333/smurfs", smurfs)
    .then(response => {
      dispatch({ type: FETCHING_SUCCESS, payload: Response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FAILURE, payload: error });
    });
};
export const ADD_SMURFS_START = "ADD_SMURF_START";
export const ADD_SMURFS = "ADD_SMURFS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({ type: ADD_SMURFS, payload: response.data });
    })
    .catch(error =>
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: error
      })
    );
};
