import axios from 'axios';

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS"
export const FETCHING_DATA_ERROR = "FETCHING_DATA_ERROR"
export const UPDATE_DATA = "UPDATE_DATA"

export const fetchSummaryData = () => dispatch => {

    dispatch({ type: FETCHING_DATA_START});

    axios
        .get("https://api.covid19api.com/summary")
        .then( res => {
            dispatch({
                type: FETCHING_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.error("Request Failed", err.message)
            dispatch({
                type: FETCHING_DATA_ERROR,
                payload: err.message
            })
        })
}

export const fetchingDataButton = () => dispatch => {
    
    dispatch({ type: UPDATE_DATA });

    axios
        .get("https://api.covid19api.com/summary")
        .then( res => {
            dispatch({
                type: FETCHING_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.error("Request Failed", err.message)
            dispatch({
                type: FETCHING_DATA_ERROR,
                payload: err.message
            })
        })
}