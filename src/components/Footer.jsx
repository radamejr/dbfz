import React, { Component } from 'react';

class Footer extends Component {
    constructor () {
        super();
        this.state = {

        }
    }
    
    render() { 
        return ( 
            
                <footer className="footer">
                    <div className="col footer-container">
                        <div className="row pl-3">
                            
                            <div className="col">
                                <br></br>
                                <a href="https://forms.gle/rKNVi7CGnZwG6MB36" target="_blank" rel="noopener noreferrer" role="button">Feedback</a>
                            </div>
                        </div>
                    </div>
                </footer>
            
        );
    }
}
 
export default Footer;