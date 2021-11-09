import React, { Component } from 'react';
import '../style.css';
import Talha from '../assets/talha.jpg';
import amlanPic from '../assets/amlan.jpg';
import Amlan from '../assets/hasib.jpg';
import Salman from '../assets/salman.jpeg';
import Rakibul from '../assets/rakib.jpg';
import Hasib from '../assets/hasib.jpg';
import rakibjsx  from '../components/individual-about-pages/rakib';
import {NavLink} from 'react-router-dom'

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
                    <div className="column">
                        <div className="card">
                            <img src={Talha} alt="Talha Jahangiri Khan" style = {{width:"300px", height:"300px"}} className="center" />                 
                            <div className="container">
                                <h2>Talha Jahangiri Khan</h2>
                                <p className="title">Backend Developer</p>
                                <NavLink className="btn btn-success" to="/talha">
                                     Details
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    

                    
                    <div className="column">
                        <div className="card">
                            <img src={amlanPic} alt="Chowdhury Amlan Barua" style = {{width:"300px", height:"300px", alignItems:'center'}} className="center"  />                 
                            <div className="container">
                                <h2>Chowdhury Amlan Barua</h2>
                                <h6 className="title">Cloud Engineer &amp; Backend Dev</h6>
                                <NavLink className="btn btn-success" to="/amlan">
                                     Details
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={Salman} alt="Mohammad Salman Haydar" style = {{width:"300px", height:"300px"}}  className="center" />                 
                            <div className="container">
                                <h2>Mohammad Salman Haydar</h2>
                                <p className="title">Backend Developer</p>
                                <NavLink className="btn btn-success" to="/salman">
                                     Details
                                </NavLink>
                            </div>
                        </div>
                        </div>
                    </div>




                    <div className="column">
                        <div className="card">
                            <img src={Rakibul} alt="Mohammad Rakibul Hasan" style = {{width:"300px", height:"300px"}} className="center"  />                 
                            <div className="container">
                                <h2>Mohammad Rakibul Hasan</h2>
                                <p className="title">Frontend Teamlead</p>
                                <NavLink className="btn btn-success" to="/rakib">
                                     Details
                                 </NavLink>
                                {/* <Link className="navbar-brand" to="/rakib">Details</Link> */}
                                {/* <p><button className="button"><a href={rakibjsx}>Details</a></button></p> */}
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={Hasib} alt="Hasib Iqbal" style = {{width:"300px", height:"300px", alignItems: "center"}} className="center"  />                 
                            <div className="container">
                                <h2>Hasib Iqbal</h2>
                                <p className="title">Frontend Developer</p>
                                <NavLink className="btn btn-success" to="/hasib">
                                     Details
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </div>
                
            </React.Fragment>
           
        );
    }
}

export default About;