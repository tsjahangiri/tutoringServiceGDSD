import React, { Component } from 'react';
import '../style.css';
import hasib from '../assets/hasib.jpg';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                 <div>
                    <div className="about-section">
                    <h1>Global Distributed Software Development Project of HS Fulda</h1>
                    <p>Winter Semester 2021 - Team D</p>
                </div>
                
                <h2>Our Team</h2>
                <div className="row">
                    <div className="column">
                        <div className="card">
                        <img src={hasib} style = {{width:"300px", height:"300px"}} />


                  
                        <div className="container">
                            <h2>Hasib Iqbal</h2>
                            <p className="title">Frontend Developer</p>
                            <p><button className="button"><a href="/Portfolio/hasib.html">Details</a></button></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            </React.Fragment>
           
        );
    }
}

export default About;