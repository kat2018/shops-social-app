import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserIndex from './components/UserIndex';
// import StoreItem from './components/StoreItem';
// import PostList from './components/PostList'

class App extends Component {
    
    render() {
        return (
            <Router>
                <div>
                    <Link to='/'> All Users</Link >

                    <Switch>
                        <Route exact patch='/' component={UserIndex} />
                        {/* <Route exact patch='/users' component={StoreIndex} /> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App