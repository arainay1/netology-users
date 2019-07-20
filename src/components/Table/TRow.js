import React from 'react';
import classnames from 'classnames';

const TRow = ({ children, className, ...props }) => (
    <tr className={classnames('data-table__row', className)} {...props}>
        {children}
    </tr>
);

export default TRow;
