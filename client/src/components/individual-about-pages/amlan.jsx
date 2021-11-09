import React, { Component } from 'react';
import amlanPic from '../../assets/amlan.jpg';
import {Link} from 'react-router-dom'

class hasib extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Chowdhury Amlan Barua</h1>
                    <h2>Cloud Engineer &amp; Backend Dev</h2>
                    <div className="image">
                        <img src={amlanPic} alt="Chowdhury Amlan Barua" style = {{width:"300px", height:"300px"}} />
                    </div>
                    <p>Master's Student of Global Software Development in HS Fulda</p>
                    <Link className="btn btn-info" to="/"> Back to Home Page </Link>
                </div>
            </div>
        );
    }
}

export default hasib;