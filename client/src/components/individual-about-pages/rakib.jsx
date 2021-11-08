
import React, { Component } from 'react';
import Rakib from '../../assets/rakib.jpg';


class rakib extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <h1>Mohammad Rakibul Hasan</h1>
                <h2>Frontend Developer</h2>
                <div className="image">
                <img src={Rakib} alt="Mohammad Rakibul Hasan" style = {{width:"300px", height:"300px"}} />
                </div>
                <p>Master's Student of Global Software Development in HS Fulda</p>
                {/* <a href="#" className="btn">Get In Touch</a> */}
                </div>
            </div>
        );
    }
}

export default rakib;

