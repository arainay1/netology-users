import React from 'react';
import classnames from 'classnames';
import './textarea.scss';

const TextArea = ({
    name,
    value,
    label,
    className,
    textareaRef,
    ...props
}) => (
    <div className={classnames('textarea-container', className)}>
        {label && (
            <label
                htmlFor={name}
                className="textarea-label"
            >
                {label}
                {props.required && <span className="textarea-label__required">*</span>}
                :
            </label>
        )}
        <textarea
            name={name}
            id={name}
            className="textarea"
            ref={textareaRef}
            defaultValue={value}
            rows={3}
            {...props}
        />
    </div>
);

export default TextArea;
