import React from 'react';
import classnames from 'classnames';
import './table.scss';

const Table = ({ children, className, ...props }) => (
    <table className={classnames('data-table', className)} {...props}>
        {children}
    </table>
);

export default Table;
