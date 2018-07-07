import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {Dashboard, Posts, Post, Login} from './containers';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/post/:id" component={Post} />
                    <Route path="/login" component={Login} />
                </div>
            </BrowserRouter>
        )
    }
}


export default App