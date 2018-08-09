import React, { Component } from 'react'
import axios  from 'axios'
import {Link} from 'react-router-dom'
// import UserIndexItem from './StoreIndexItem'
import styled from 'styled-components'
import { Card, Icon, Image, Button } from "semantic-ui-react";
import UserNewForm from './UserNewForm' ;

//Most of this component was inpired by this repo: https://git.generalassemb.ly/danielpino-ga-wdi/wdi16-tunr-react-rails/blob/master/client/src/components/ArtistIndex.js


const UserHeader = styled.h1`
    background-color: white;
`

const UserIndexItemContainer = styled(Card)`
  background-color: gray;
  border: black;
  display: grid;
`;

    
    // align-items: center;
    // display: grid;
    // color: black;

class UserIndex extends Component {
    constructor(){
        super();
        this.state = {
            error: '',
            users: [],
            stores: [],
            showUserNewForm: false
        }
    }

    componentDidMount(){
        this.fetchUsers()
    }
    fetchUsers = () =>{
        axios.get('/api/users')
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
            .catch((err) => {
            console.log(err)
        })
    }
    toggleUserNewForm = () => { 
        this.setState({showUserNewForm: !this.state.showUserNewForm})
    }


    render() {
        const userList = 
        this.state.users.map((user) => {
            return(
                <UserIndexItemContainer key={user.id} >
                 <Card.Group>
                 <Card>
                     <Card.Content>
                         <Image avatar src={user.image} />
                         <Card.Header>
                             <Link to={`/api/users/${user.id}`}> {user.username} </Link>
                         </Card.Header>
                 </Card.Content>
                 <Card.Content extra>
                 <a>
                     <Icon name='user' />
                     {user.free_email}
                 </a>
                 </Card.Content>

                 </Card>
                 </Card.Group>
                 </UserIndexItemContainer>
            )
            
        })
        return(
            <div>
                <UserHeader>
                    Find Your User
                </UserHeader>
               
                    <Button onClick={this.toggleUserNewForm} >
                        New User
                    </Button>

                    {this.state.showUserNewForm ? <UserNewForm fetchUsers={this.fetchUsers}/> : null }
                
                <Card.Group>
 
                        {userList}
                 
                </Card.Group>
 
            </div>
        )
    }
}

export default UserIndex;