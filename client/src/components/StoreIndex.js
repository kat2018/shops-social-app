import React, { Component } from 'react'
import StoreIndexItem from './StoreIndexItem'
import styled from 'styled-components'

const StoreIndexItemContainer = styled.div`
    background-color: #F85C1E;
    padding: 30px;
    align-items: center;
    display: grid;
    color: black;
`


class StoreIndex extends Component {
    
    render() {
        return (
            <StoreIndexItemContainer>
                <h1>Shops</h1>
                <StoreIndexItem />
                <StoreIndexItem />
                <StoreIndexItem />

            </StoreIndexItemContainer>
        );
    }
}

export default StoreIndex;