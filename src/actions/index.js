import axios from 'axios';

export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAIL = 'LOAD_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => (dispatch) => {
    dispatch(loadStart());
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch(loadSuccess(res.data));
        })
        .catch(err => {
            dispatch(loadFail(err));
        })
}

export const loadStart = () => {
    return({type:LOAD_START});
};

export const loadSuccess = (smurfs) => {
    return({type:LOAD_SUCCESS, payload: smurfs});
};

export const loadFail = (error) => {
    return({type:LOAD_FAIL, payload: error})
};

export const addSmurf = (newSmurf) => {
    return({type:ADD_SMURF, payload: newSmurf});
};

export const setError = (message) => {
    return({type:SET_ERROR, payload: message});
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.