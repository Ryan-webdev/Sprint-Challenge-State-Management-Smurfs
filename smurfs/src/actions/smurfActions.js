import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';
export const POST_SMURF = 'POST_SMURF';


export const getSmurf = () => dispatch => {

    dispatch({type: FETCHING_DATA});

    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({type: ADD_SMURF, payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: ERROR, payload: 'Error 404 not found', err});
    });
};


export const postSmurf = addedSmurf => dispatch => {
    
    axios.post('http://localhost:3333/smurfs', addedSmurf)
    .then(res => {
        console.log(res)
        dispatch({type: POST_SMURF, payload: addedSmurf})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: ERROR, payload: 'There are no smurfs here', err})
    })
}