
import { requestErrorMessages } from "./constants";

const handleError = ({ errorCode = 500, action }) => {

    return {
        message: errorCode === 500 ?
            requestErrorMessages.serverError()
            :
            requestErrorMessages.otherError({ errorCode, action })
    };
};

export default handleError; 