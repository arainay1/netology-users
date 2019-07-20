import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { UsersContext } from '@app/providers/Users';
import UserControl from '@app/components/UserControl';
import './user.scss';

const User = ({ match: { params } }) => {
    const {
        selectors: {
            getUserById
        }
    } = useContext(UsersContext);

    const { id } = params;
    const user = getUserById(id);

    if (!user) {
        return null;
    }

    return (
        <div className="user">
            <UserControl user={user}/>
            <div className="user__row">
                <div className="user__label">Имя и фамилия:</div>
                <div className="user__value">{user.firstName} {user.lastName}</div>
            </div>
            <div className="user__row">
                <div className="user__label">Должность:</div>
                <div className="user__value">{user.position}</div>
            </div>
            <div className="user__row">
                <div className="user__label">Описание:</div>
                <div className="user__value">{user.description}</div>
            </div>
        </div>
    );
};

export default withRouter(User);
