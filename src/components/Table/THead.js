import React from 'react';
import classnames from 'classnames';

const THead = ({ children, className, ...props }) => (
    <thead className={classnames('data-table__head', className)} {...props}>
        {children}
    </thead>
);

export default THead;
