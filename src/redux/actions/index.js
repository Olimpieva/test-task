import api from "../../utils/Api";
import { GET_ALL_USERS, UPDATE_USER } from "../../utils/constans";

export const getAllUsers = () => async dispatch => {
    let allUsers;

    try {
        allUsers = await api.getAllUsers();
    } catch (error) {
        return console.log(`Sorry, there's been a mistake: ${error.message}`);
    };

    dispatch({ type: GET_ALL_USERS, payload: allUsers });
};
