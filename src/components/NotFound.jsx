import React, { Component } from 'react';

class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content-container">
                <h4>Oops, that page does not exist. Try again.</h4>
                <img src="./no_page.gif" class="rounded mx-auto d-block" alt="page not found"></img>
            </div>
         );
    }
}
 
export default NotFound;