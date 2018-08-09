import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserIndex from './components/UserIndex';
import User from './components/User';


class App extends Component {
    
    render() {
        return (
            <Router>
                <div>
                    <Link to='/'>Home</Link >
                    <Switch>
                        <Route exact path='/' component={UserIndex} />
                        <Route exact path='/api/users/:id' component={User} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App