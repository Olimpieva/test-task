import React from 'react';

import './Button.scss';

function Button(props) {
    const { type, id, name, title, onClick } = props;

    return (
        <button className={`button button_${name}`}
            id={id || name}
            name={name}
            type={type}
            onClick={(event) => onClick(event)}
        >
            {title}
        </button>
    );
}

export default Button;