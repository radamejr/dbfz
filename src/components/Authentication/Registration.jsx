import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';



class Registration extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            password_confirmation: ''
        }
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const { email, password, password_confirmation } = this.state;


               
    }


    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }
  

    render() { 
        return ( 
            <div>
                <form id="registration" onSubmit={this.onSubmit}>
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
            </div>
         );
    }
}
 
export default Registration;