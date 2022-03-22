import { FAILURE, GET_ALL_USERS, REQUEST, SUCCESS } from "../../utils/constans";

const initialState = {
    data: [],
    loading: false,
    loaded: false,
    error: null,
};

const users = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_USERS + REQUEST:
            return { ...state, loading: true, loaded: false, error: null }
        case GET_ALL_USERS + SUCCESS:
            return { ...state, data: action.payload, loading: false, loaded: true, error: null };
        case GET_ALL_USERS + FAILURE:
            return { ...state, error: action.payload, loading: false, loaded: false };
        default:
            return state;
    };

};

export default users;