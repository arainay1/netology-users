import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from '@app/components/Users';
import User from '@app/components/User';
import NotFound from '@app/components/NotFound';

const App = () => (
    <Switch>
        <Route path="/users" component={Users}/>
        <Route path="/user/:id" component={User}/>
        <Redirect exact from="/" to="/users"/>
        <Route component={NotFound}/>
    </Switch>
);

export default App;
