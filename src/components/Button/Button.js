import React from 'react';
import classnames from 'classnames';
import './button.scss';

const Button = ({ type = 'button', children, className, ...props }) => {
    return (
        <button
            type={type}
            className={classnames('button', className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
