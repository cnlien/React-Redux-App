import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_ERROR,
    UPDATE_DATA
} from "../actions";

const initialState = {
    data: [],
    isFetching: true,
    error: "",
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_DATA_START:
            return {
                ...state,
                isFetching: true,
            };
        
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        
        case FETCHING_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case UPDATE_DATA:
            return {
                ...state,
                fetching: true,
            }
        
        default:
            return state;
    }
}