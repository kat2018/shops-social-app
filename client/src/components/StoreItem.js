import React, { Component } from 'react';
import styled from "styled-components";


const StoreItemContainer = styled.div`
    background-color: #C4C4C4;
    padding: 30px;
    align-items: center;
    display: grid;
    color: black;
`

class StoreItem extends Component {
    render() {
        return (
            <StoreItemContainer>
                <h1>Lululemon</h1>
                <h4>This is a store description field. </h4>
            </StoreItemContainer>
        );
    }
}

export default StoreItem;