import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { authAPI } from '../../helpers/urlFor';

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        
        
        axios.post(authAPI("sign_in"), { email, password })
        .then((result) => {

        });
               
    }
    

    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }

    componentDidMount() {
        

        
        
    }

    render() { 
        return ( 
            <div>
                <form id="signin" onSubmit={this.onSubmit}>
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
            </div>

            
         );
    }
}
 
export default SignIn;