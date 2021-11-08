import React, { Component } from 'react';
import HasibPic from '../../assets/hasib.jpg';
import {Link} from 'react-router-dom'

class hasib extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Hasib Iqbal</h1>
                    <h2>Frontend Developer</h2>
                    <div className="image">
                        <img src={HasibPic} alt="Hasib Iqbal" style = {{width:"300px", height:"300px"}} />
                    </div>
                    <p>Master's Student of Global Software Development in HS Fulda</p>
                    <Link className="btn btn-info" to="/"> Back to Home Page </Link>
                </div>
            </div>
        );
    }
}

export default hasib;