import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { auth } from '../../helpers/urlFor'


class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: ''            
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {username, email, password} = this.state
        let user = {
            username: username,
            email: email,
            password: password
        }

        axios.post(auth("login"), {user}, {withCredentials: true})
        .then(response => {
            if (response.data.logged_in) {
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

    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
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

    componentDidMount() {
        return this.props.loggedInStatus ? this.redirect() : null
    }   

    render() { 
        
        return ( 
            <div className="">
                <div className="col-sm form-background mx-auto">
                    <h1>Login</h1>
                    <form id="signin" onSubmit={this.onSubmit}>
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
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <br></br>
                    <Link to='/register'>Not signed up?</Link>
    
                    <div>
                        {
                        this.state.errors ? this.handleErrors() : null
                        }
                    </div>
                </div>
            </div>

           
            
         );
    }
}
 
export default SignIn;