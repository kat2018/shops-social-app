import React, { Component } from 'react'
import StoreIndex from './components/StoreIndex';
import StoreItem from './components/StoreItem';
import PostList from './components/PostList'

class App extends Component {
    
    render() {
        return (
            <div>
                <StoreIndex />
                <StoreItem/>
                <PostList />
            </div>
        )
    }
}

export default App