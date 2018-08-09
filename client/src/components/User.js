import React, { Component } from 'react'
import axios from 'axios'



class User extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        this.fetchUserAndStores()
    }

    fetchUserAndStores = async () => {
        const userId = this.props.match.params.id

        try{
            let userResponse = await axios.get(`/api/users/${userId}`)
            let storeResponse = await axios.get(`/api/users/${userId}/stores`)

            this.setState({
                user: userResponse.data,
                store: storeResponse.data
            })
        } catch (error){
            console.error(error)
        }
    }

    render() {
        // const storesList = this.state.stores.map((store) => {
        //     return (
        //         <div>
        //             <div>{store.name}</div>
        //         </div>
        //     )
        // })
        return (
            <div>
                <img src={this.state.user.image} alt={this.state.user.username} />
                <h1> {this.state.user.username} </h1>
                <h1> {this.state.user.free_email} </h1>
                {/* {storesList} */}
            </div>
        );
    }
}

export default User