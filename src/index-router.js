import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Wrapper from './pages/wrapper'
import AdminIndexPage from './admin-page'

export default class IndexRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/admin">
                        <AdminIndexPage/>
                    </Route>
                    <Route path="/">
                        <Wrapper/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}