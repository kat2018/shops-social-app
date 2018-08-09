import React, { Component } from 'react'
import axios  from 'axios'
import {Link} from 'react-router-dom'
// import UserIndexItem from './StoreIndexItem'
import styled from 'styled-components'
import { Card, Image } from 'semantic-ui-react'

//Most of this component was inpired by this repo: https://git.generalassemb.ly/danielpino-ga-wdi/wdi16-tunr-react-rails/blob/master/client/src/components/ArtistIndex.js


const UserHeader = styled.h1`
    background-color: white;
`

const UserIndexItemContainer = styled(Card)`
    background-color: gray;
    align-items: center;
    display: grid;
    color: black;
`


class UserIndex extends Component {
    constructor(){
        super();
        this.state = {
            error: '',
            users: []
        }
    }

    componentWillMount(){
        this.fetchUsers()
    }
    fetchUsers = async() =>{
        try{
            const res = await axios.get('/api/users/')
            await this.setState({ users: res.data })
            return res.data
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
            return err.message
        }
    }
    render() {
        if(this.state.error){
            return(
            <div>
                {this.state.error}
            </div>
            )
        }
        // return(
        //     <div>
        //         <h1>All Users</h1>
        //         {this.state.users.map(user =>(
        //             <div key={user.id}>
        //             <Link to={`/user/${user.id}`} > {user.username} </Link>
        //             </div>
        //         ))}
        //     </div>
        // )
        const userList = this.state.users.map((user) => {
            return (
                <UserIndexItemContainer key={user.id} >
                <Card.Header>
                    <Link to={`/api/users/${user.id}`}> {user.username} </Link>
                </Card.Header>
                <Card.Content>
                    <Image avatar src={user.image} />
                    {user.free_email}
                </Card.Content>
                </UserIndexItemContainer>
            );
        })
        return(
            <div>
                <UserHeader>
                    Find Your User
                </UserHeader>
                <Card.Group centered>
                {userList}
                </Card.Group>
            </div>
        )
    }
}

export default UserIndex;