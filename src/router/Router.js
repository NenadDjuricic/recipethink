import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App';
import SearchPage from '../pages/SearchPage'
import Recipe from '../pages/Recipe'
import Category from '../pages/Category'
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} exact />
            <Route path='/searchpage/:id' component={SearchPage} exact/>
            <Route path='/category/:id' component={Category} exact />
            <Route path='/recipe/:id' component={Recipe} exact />
        </Switch>
    </BrowserRouter>
)

export default Router;