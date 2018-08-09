import React, { Component } from 'react';
import { Parallax, Background } from "react-parallax";
import { Link } from "react-router-dom";
import styled from '../../node_modules/styled-components';

const Welcome = styled.div`
    color: white;
    font-size: 60px;
    padding-top: 30vh;
    padding-left: 30vh;
    padding-right: 30vh;
    height: 100vh;
    font-family: Arial;
    background-color: rgba(0, 0, 0, 50%);
   
`;



const Image = styled.img`
  height: 80vh;
`


class Home extends Component {
    render() {
        return <div>
            <Parallax 
            blur={10}
            strength={900}
            >
                <Welcome>
                    
                    <Link 
                    to='/api/users' 
                    style={{ 
                        textDecoration: 'none', 
                        color: 'white' 
                    }} 
                    >
                    Welcome to Shops Social App
                    </Link>
                </Welcome>
                <Background className="custom-bg">
                    <Image src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e41af172b07cceb6ccc1c785e5463e3f&auto=format&fit=crop&w=1500&q=80" alt="fill murray" />
                </Background>
            </Parallax>
          </div>;
    }
}

export default Home;