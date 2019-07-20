import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <Fragment>
        <h1>Ничего не найдено</h1>
        <Link to="/">На главную</Link>
    </Fragment>
);

export default NotFound;
