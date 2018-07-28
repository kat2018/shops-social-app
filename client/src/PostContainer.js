import React, { Component } from 'react';
import PostList from './PostList'

class PostContainer extends Component {
    render() {
        return 
        <div>
            <div className="reviews">
              <h2>Latest Reviews: </h2>
              <PostList />
            </div>
        </div>;
    }
}

export default PostContainer;