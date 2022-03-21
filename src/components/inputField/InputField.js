import React from "react";
import FormError from "../FormError/FormError";

import './InputField.css';

function InputField(props) {
    const { type, formName, name, title, minLength = 2, pattern, required, isEdited, value, onChange, error } = props;

    return (
        <fieldset className={`input-field ${formName}__input-field`}>
            <label className="input-field__caption" htmlFor={`${formName}-${name}`} >{title}</label>
            <input className="input-field__input" id={`${formName}-${name}`}
                type={type}
                name={name}
                minLength={minLength}
                maxLength="30"
                pattern={pattern}
                required={required}
                disabled={!isEdited}
                value={value}
                onChange={(event) => {
                    onChange(event.target)
                }}
            />
            <FormError
                name={name}
                isHidden={!error}
                message={error}
            />
        </fieldset>
    )
}

export default InputField;