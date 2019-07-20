import React, { createElement } from 'react';
import classnames from 'classnames';

const TD = 'td';

const TCell = ({
   tag = TD,
   children,
   className,
    ...props
}) => createElement(
    tag,
    {
        ...props,
        className: classnames(
            'data-table__cell',
            className
        )
    },
    <div className="data-table__cell-children-container">{children}</div>
);

export default TCell;
