import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserIndex from './components/UserIndex';
import User from './components/User';
import Home from "./components/Home";



class App extends Component {
    
    render() {
        return (
            <Router>
                <div>
                    <Link to='/' style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>Home</Link >
                    <Switch>
                        <Route exact path='/' component={Home} />

                        <Route exact path='/api/users' component={UserIndex} />
                        <Route exact path='/api/users/:id' component={User} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App