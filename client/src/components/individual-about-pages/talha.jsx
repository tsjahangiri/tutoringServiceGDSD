import React, { Component } from 'react';
import Talha from '../../assets/talha.jpg';
import {Link} from 'react-router-dom'

class talha extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Talha Jahangiri Khan</h1>
                    <h2>Backend Developer</h2>
                    <div className="image">
                        <img src={Talha} alt="Talha Jahangiri Khan" style = {{width:"300px", height:"300px"}} />
                    </div>
                    <p>Master's Student of Global Software Development in HS Fulda</p>
                    <Link className="btn btn-info" to="/"> Back to Home Page </Link>
                </div>
            </div>
        );
    }
}

export default talha;