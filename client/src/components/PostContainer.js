import React, { Component } from 'react';
import PostList from './PostList'
import  './PostContainer.css'

class PostContainer extends Component {
    render() {
        return 
        <div className="box">
            <div className="reviews">
              <h2>Latest Reviews: </h2>
              <PostList />
            </div>
        </div>;
    }
}

export default PostContainer;