import React, { Component } from 'react'
import PostList from './components/PostList'
import StoreIndex from './components/StoreIndex';

class App extends Component {
    
    render() {
        return (
            <div>
                <StoreIndex />
                <PostList />
            </div>
        )
    }
}

export default App