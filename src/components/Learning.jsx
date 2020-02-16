import React, { Component } from 'react';
import Basics from './Basics'
import Neutral from './Neutral'
import Offense from './Offense'
import Defense from './Defense'

class Learning extends Component {
    constructor() {
        super();
        this.state = {
            topic: "Basics"
        }
    }

    componentDidMount() {
        this.scrollToTop(); 
    }

    changeTopic = (e, topic_type) => {
        e.preventDefault();
        this.setState({topic: topic_type})
               
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    }

    render() { 
        
        return ( 
            <div className="content-container container col-lg-9 col-md-11 col-sm-12">
                <div className="row kame-intro">
                    <div className="col-sm text-left">
                        <p>
                            Kame House is Framehameha's "Learning" section. Here you will find the basics, tips, tricks and helpful resources on learning more about Dragonball Fighterz.
                        </p>
                        <p>
                             Whether you are a veteran to fighting games, or just joining in because you love Dragonball. This resource is meant to help you power-up and jump into the fray.
                        </p>
                    </div>
                    <div className='col-sm'>
                        <span className="helper"></span>
                        <img className="img-fluid" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/Kamehouse.jpg" alt="Kame House"></img>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="kame-nav">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <button className="btn btn-link" onClick={ (event) => this.changeTopic(event, 'Basics')} >Basics</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-link" onClick={ (event) => this.changeTopic(event, 'Neutral')} >Neutral</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-link" onClick={ (event) => this.changeTopic(event, 'Offense')}>Offense</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-link" onClick={ (event) => this.changeTopic(event, 'Defense')}>Defense</button>
                        </li>
                    </ul>
                </div>
                <br></br>
                <br></br>
                
                    {(this.state.topic === 'Basics') ? <Basics /> : null}
                    {(this.state.topic === 'Neutral') ? <Neutral /> : null}
                    {(this.state.topic === 'Offense') ? <Offense /> : null}
                    {(this.state.topic === 'Defense') ? <Defense /> : null}
                
                
            </div>
         );
    }
}
 
export default Learning;