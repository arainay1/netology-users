import React from 'react';
import classnames from 'classnames';

const TBody = ({ children, className, ...props }) => (
    <tbody className={classnames('data-table__body', className)} {...props}>
        {children}
    </tbody>
);

export default TBody;
