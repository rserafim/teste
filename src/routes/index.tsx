import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import Question from '../pages/Question';
import Teste from '../pages/Teste'

const Routes: React.FC = () => (
    <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/all/:id' exact component={Question} />
            <Route path='/teste' exact component={Teste} />
        </Switch>
    </Router>
)

export default Routes;