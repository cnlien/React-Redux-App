import {
    FETCHING_DATA_START,
    FETCHING_DATA_ERROR,
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
                isFetching: false,
                data: action.payload
            };
        
        case FETCHING_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        
        default:
            return state;
    }
}