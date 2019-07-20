import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { UsersContext } from '@app/providers/Users';
import Table, { THead, TBody, TRow, TCell } from '@app/components/Table';
import UserControl from '@app/components/UserControl';
import './users.scss';

const Users = ({ history }) => {
    const {
        selectors: { getUsers, isError }
    } = useContext(UsersContext);

    const users = getUsers();
    const error = isError();

    const toUser = (userId) => () => {
        history.push(`/user/${userId}`);
    };

    if (error) {
        return <h1>Произошла ошибка. Попробуйте обновить страницу.</h1>;
    }

    return (
        <div className="users">
            <UserControl user={{}}/>
            <Table>
                <THead className="users__table-headers">
                    <TRow>
                        <TCell tag="th">Имя</TCell>
                        <TCell tag="th">Фамилия</TCell>
                        <TCell tag="th">Должность</TCell>
                        <TCell tag="th" className="users__mobile-header"/>
                    </TRow>
                </THead>
                <TBody>
                    {users.map(item => (
                        <TRow key={item.id} onClick={toUser(item.id)}>
                            <TCell className="users__screen">{item.firstName}</TCell>
                            <TCell className="users__screen">{item.lastName}</TCell>
                            <TCell className="users__screen">{item.position}</TCell>
                            <TCell className="users__mobile">
                                <p>{item.firstName} {item.lastName}</p>
                                <p>{item.position}</p>
                            </TCell>
                        </TRow>
                    ))}
                </TBody>
            </Table>
        </div>
    );
};

export default withRouter(Users);
