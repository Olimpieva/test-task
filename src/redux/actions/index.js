import api from "../../utils/Api";
import { GET_ALL_USERS, REQUEST, SUCCESS, FAILURE } from "../../utils/constans";

export const getAllUsers = () => async (dispatch, getState) => {

    const { loading, loaded } = getState();
    let allUsers;

    if (loading || loaded) {
        return;
    }

    dispatch({ type: GET_ALL_USERS + REQUEST, payload: 'Loading...' });

    try {
        allUsers = await api.getAllUsers();
    } catch (error) {
        dispatch({ type: GET_ALL_USERS + FAILURE, payload: error });
    };

    dispatch({ type: GET_ALL_USERS + SUCCESS, payload: allUsers });
};
