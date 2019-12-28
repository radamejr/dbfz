import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { auth } from '../../helpers/urlFor'



class Registration extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: ''
        }
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const {username, email, password, password_confirmation} = this.state
        let user = {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        axios.post(auth('users'), {user}, {withCredentials: true})
        .then(response => {
            if (response.data.status === 'created') {
                this.props.handleLogin(response.data)
                this.redirect()
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    }

    redirect = () => {
        this.props.history.goBack()
    }

    handleErrors = () => {
        return (
            <div>
                <ul className="error">
                    {this.state.errors.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }


    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  

    render() { 
        return ( 
            <div>
                <form id="registration" onSubmit={this.onSubmit}>
                    <div className="category">
                        Username:
                        <div className="form-input">
                            <input name="username"
                                type="text"
                                defaultValue=''
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Email:
                        <div className="form-input">
                            <input name="email"
                                type="email"
                                defaultValue=''
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Password:
                        <div className="form-input">
                            <input name="password"
                                type="password"
                                defaultValue=''
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="category">
                        Confirm Password:
                        <div className="form-input">
                            <input name="password_confirmation"
                                type="password"
                                defaultValue=''
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <br></br>
                <Link to='/login'>Already Registered?</Link>

                <div>
                    {
                    this.state.errors ? this.handleErrors() : null
                    }
                </div>
            </div>
         );
    }
}
 
export default Registration;