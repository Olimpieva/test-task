import { FAILURE, GET_ALL_USERS, REQUEST, SUCCESS } from "../actions/actionTypes";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const users = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_USERS + REQUEST:
            return { ...state, loading: true, error: null }
        case GET_ALL_USERS + SUCCESS:
            return { ...state, data: action.payload, loading: false, error: null };
        case GET_ALL_USERS + FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    };
};

export default users;