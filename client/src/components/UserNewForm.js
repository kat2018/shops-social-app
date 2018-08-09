import React, { Component } from 'react';
import axios from 'axios'

class UserNewForm extends Component {
    state = {
        username: '',
        free_email: '',
        image: ''
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState({...newState})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            username: this.state.username,
            free_email: this.state.free_email,
            image: this.state.image
        }
        await axios.post('/api/users/', payload)
        await this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                        <label htmlFor="User Name">User Name: </label>
                        <input onChange={this.handleChange} type="text" name="username" value={this.state.username} />
                    </div>

                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input onChange={this.handleChange} type="text" name="free_email" value={this.state.free_email} />
                    </div>

                    <div>
                        <label htmlFor="Image">Image </label>
                        <input onChange={this.handleChange} type="text" name="image" value={this.state.image} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        );
    }
}

export default UserNewForm;