import React from 'react';
import classnames from 'classnames';

const Form = ({ onSubmit, className, children, ...props }) => (
    <form
        onSubmit={onSubmit}
        className={classnames('form', className)}
        {...props}
    >
        {children}
    </form>
);

export default Form;
