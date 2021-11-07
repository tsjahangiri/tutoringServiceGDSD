import React, { Component } from 'react';
import '../style.css';
import Talha from '../assets/talha.jpg';
import Amlan from '../assets/hasib.jpg';
import Salman from '../assets/hasib.jpg';
import Rakibul from '../assets/hasib.jpg';
import Hasib from '../assets/hasib.jpg';

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
                <div>
                    <div class="column">
                        <div class="card">
                            <img src={Talha} alt="Talha Jahangiri Khan" style = {{width:"300px", height:"300px"}} />                 
                            <div class="container">
                                <h2>Talha Jahangiri Khan</h2>
                                <p class="title">Backend Developer</p>
                                <p><button className="button"><a href="/Portfolio/hasib.html">Details</a></button></p>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <img src={Amlan} alt="Chowdhury Amlan Barua" style = {{width:"300px", height:"300px"}} />                 
                            <div class="container">
                                <h2>Chowdhury Amlan Barua</h2>
                                <p class="title">Cloud Engineer</p>
                                <p><button className="button"><a href="/Portfolio/hasib.html">Details</a></button></p>
                            </div>
                        </div>
                    </div>


                    <div class="column">
                        <div class="card">
                            <img src={Salman} alt="Mohammad Salman Haydar" style = {{width:"300px", height:"300px"}} />                 
                            <div class="container">
                                <h2>Mohammad Salman Haydar</h2>
                                <p class="title">Backend Developer</p>
                                <p><button className="button"><a href="/Portfolio/hasib.html">Details</a></button></p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <img src={Rakibul} alt="Mohammad Rakibul Hasan" style = {{width:"300px", height:"300px"}} />                 
                            <div class="container">
                                <h2>Mohammad Rakibul Hasan</h2>
                                <p class="title">Frontend Teamlead</p>
                                <p><button className="button"><a href="/Portfolio/hasib.html">Details</a></button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={Hasib} alt="Hasib Iqbal" style = {{width:"300px", height:"300px", alignItems: "center"}} />                 
                            <div className="container">
                                <h2>Hasib Iqbal</h2>
                                <p className="title">Frontend Developer</p>
                                <p><button className="button"><a href="/Portfolio/hasib.html">Details</a></button></p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </React.Fragment>
           
        );
    }
}

export default About;