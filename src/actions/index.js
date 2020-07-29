import axios from 'axios';

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_ERROR = "FETCHING_DATA_ERROR"

export const fetchSummaryData = () => dispatch => {

    axios
        .get("https://api.covid19api.com/summary")
        .then( res => {
            console.log("Covid Data", res);
            dispatch({
                type: FETCHING_DATA_START,
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
