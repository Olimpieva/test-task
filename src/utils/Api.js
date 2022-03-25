import { MAIN_URL } from "./constants";

class MainApi {
    constructor(options) {
        this._url = options.url;
    }

    async _sendRequest(path, requestOptions) {
        try {
            const response = await fetch(`${this._url}/${path}`, { ...requestOptions });
            if (!response.ok) {
                throw response;
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        };
    };

    getAllUsers() {
        return this._sendRequest(``, {
            method: 'GET',
        });
    };

    updateUser(userData) {
        return console.log(JSON.stringify(userData));
    };
};

const api = new MainApi({ url: MAIN_URL });

export default api;