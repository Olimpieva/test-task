import { createSelector } from "reselect";

const allUsersSelector = state => state.users.data;

export const usersShortInfoSelector = createSelector(
    allUsersSelector,
    users =>
        users.map((user) => {
            const { id, name, company: { name: company }, address: { city } } = user;
            return { id, name, company, city };
        })
);

export const userProfilesSelector = createSelector(
    allUsersSelector,
    user =>
        user.map((user) => {
            const { id, username, email, name, address: { street, city, zipcode }, phone, website } = user;
            return { id, name, username, email, street, city, zipcode, phone, website };
        })
);