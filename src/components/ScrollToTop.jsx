import React, { Component } from 'react';

class ScrollToTop extends Component {
    constructor(){
        super();
        this.state = {  
            visible: false
        }
    }

    componentDidMount = () => {
        var scrollComponent = this;

        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
          
          
        });
    }

    toggleVisibility = () => {
        if (window.pageYOffset > 50) {
            this.setState({
                visible: true
            });
            
            } else {
            this.setState({
                visible: false
            });
            
        }
    }
    
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() { 
        const { visible } = this.state;

        console.log(visible)
        return ( 
            <div>
                {visible ?
                <div className="scroll-to-top" onClick={() => this.scrollToTop()}>
                    <button className="btn btn-primary" type="submit">Top</button>
                </div>
                : 
                null
                }                
            </div>
         );
    }
}
 
export default ScrollToTop;