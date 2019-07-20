import React, { createContext } from 'react';
import UsersService from '@app/services/UsersService';

export const ServiceContext = createContext({});

const ServiceProvider = ({ children }) => (
    <ServiceContext.Provider
        value={{
            usersService: new UsersService()
        }}
    >
        {children}
    </ServiceContext.Provider>
);

export default ServiceProvider;
