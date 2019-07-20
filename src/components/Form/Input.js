import React, { Fragment, forwardRef } from 'react';
import classnames from 'classnames';
import './input.scss';

const Input = ({
    type = 'text',
    name,
    value,
    label,
    className,
    inputRef,
    ...props
}) => (
    <Fragment>
        <div className={classnames('input-container', className)}>
            {label && (
                <label htmlFor={name} className="input-label">
                    {label}
                    {props.required && <span className="input-label__required">*</span>}
                    :
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                className="input"
                ref={inputRef}
                defaultValue={value}
                {...props}
            />
        </div>
    </Fragment>
);

export default forwardRef((props, ref) => <Input {...props} inputRef={ref}/>);
