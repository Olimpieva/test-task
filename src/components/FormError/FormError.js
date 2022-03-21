import React from "react";

import './FormError.css'

function FormError(props) {
    const { name, isHidden, message } = props;

    return (
        <span
            className={`form-error ${!isHidden && 'form-error_active'}`}
            id={`${name}-error`}
        >
            {message}
        </span>
    )

}

export default FormError;