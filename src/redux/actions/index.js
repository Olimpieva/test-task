import api from "../../utils/Api";
import handleError from "../../utils/errorHandler";
import { GET_ALL_USERS, REQUEST, SUCCESS, FAILURE } from "./actionTypes";

export const getAllUsers = () => async (dispatch, getState) => {

    const { loading, loaded } = getState();

    if (loading || loaded) {
        return;
    }

    dispatch({ type: GET_ALL_USERS + REQUEST, payload: 'Loading...' });

    try {
        const allUsers = await api.getAllUsers();
        dispatch({ type: GET_ALL_USERS + SUCCESS, payload: allUsers });
    } catch (error) {
        dispatch({ type: GET_ALL_USERS + FAILURE, payload: handleError({ errorCode: error.status, action: GET_ALL_USERS }) });
    };
};
