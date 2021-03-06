import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Comments from './pages/Comments';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/coments' component={Comments} />
                <Route path='*' component={() => (<h1>Not Foound!</h1>)} />
            </Switch>
        </BrowserRouter>
    )
}