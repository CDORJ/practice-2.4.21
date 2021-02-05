import axios from "axios";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const GOT_SMURFS = "GOT_SMURFS";
export const NO_SMURFS = "NO_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const website = "http://localhost:3333/smurfs";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(website)
    .then((res) => {
      console.log(res, "got Smurfs");
      dispatch({
        type: GOT_SMURFS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: NO_SMURFS,
        payload: err.data,
      });
    });
  /* case when successful, case when not successful, case when fetching */
};

export const addSmurf = (newSmurf) => (dispatch) => {
  axios.post(website, newSmurf).then((res) => {
    dispatch({ type: ADD_SMURF, payload: newSmurf });
  });
};
