
import React, { Component } from 'react';
import Rakib from '../../assets/rakib.jpg';
import {Link, NavLink} from 'react-router-dom'


class rakib extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <h2>Name: Mohammad Rakibul Hasan</h2>
                <h3>Role: Frontend Developer </h3>
                <h3>ID: 1355257 </h3>
                <div className="image">
                <img src={Rakib} alt="Mohammad Rakibul Hasan" style = {{width:"300px", height:"300px"}} />
                </div>
                <p>BIO: Hello. Myself Mohammad Rakibul hasan.I am a Master's Student of Global Software Development in HS Fulda</p>
                <p>I am a tech enthusiastic person and I love to learn new technologies. My Expertise is in C#, Java, Javascript etc.</p>
                <p>Experience: I have two years of experience of working in software industry. I mostly worked on Asp .Net Technologies.
                  Currently I am working as a "WerkStudent" in a company in Germany.
                  You can reach me by mail: "mohammd-rakibul.hasan@informatik.hs-fulda.de"
                </p>
                <Link className="btn btn-info" to="/"> Back to Home Page </Link>
                </div>
            </div>
        );
    }
}

export default rakib;

