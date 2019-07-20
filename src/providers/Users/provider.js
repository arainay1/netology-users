import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ServiceContext } from '@app/services';
import { GET_USERS_FAILURE, GET_USERS_INIT, GET_USERS_SUCCESS } from './constants';
import reducer from './reducer';
import getSelectors from './selectors';

export const UsersContext = createContext({
    selectors: {},
    actions: {}
});

const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        users: [],
        isError: false
    });
    const { usersService } = useContext(ServiceContext);

    const getUsers = () => {
        dispatch({ type: GET_USERS_INIT });

        const users = usersService.getUsers() || [];
        dispatch({ type: GET_USERS_SUCCESS, payload: users });

    };

    const addUser = (user) => {
        dispatch({ type: GET_USERS_INIT });

        try {
            usersService.addUser(user);
            const users = usersService.getUsers();
            dispatch({ type: GET_USERS_SUCCESS, payload: users });
        } catch (e) {
            dispatch({ type: GET_USERS_FAILURE });
        }
    };

    const updateUser = (user) => {
        dispatch({ type: GET_USERS_INIT });

        try {
            usersService.updateUser(user);
            const users = usersService.getUsers();
            dispatch({ type: GET_USERS_SUCCESS, payload: users });
        } catch (e) {
            dispatch({ type: GET_USERS_FAILURE });
        }
    };

    useEffect(getUsers, []);

    return (
        <UsersContext.Provider
            value={{
                selectors: getSelectors(state),
                actions: {
                    addUser,
                    updateUser
                }
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;
