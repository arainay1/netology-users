import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ServiceProvider from '@app/services';
import UsersProvider from '@app/providers/Users';
import App from '@app/components/App';

render(
    <ServiceProvider>
        <UsersProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </UsersProvider>
    </ServiceProvider>,
    document.getElementById('root')
);
