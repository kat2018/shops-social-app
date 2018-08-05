import React, { Component } from 'react';
import StoreIndexItem from './StoreIndexItem'

class StoreIndex extends Component {
    render() {
        return (
            <div>
                <h1>Shops</h1>
                <StoreIndexItem />
            </div>
        );
    }
}

export default StoreIndex;