import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {Home, Header} from './containers';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/address" component={Header} />
                </div>
            </BrowserRouter>
        )
    }
}


export default App