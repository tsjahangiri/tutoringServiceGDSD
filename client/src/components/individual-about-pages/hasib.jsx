import React, { Component } from 'react';
import HasibPic from '../../assets/hasib.jpg';
// import '../../assets/styles/hasib.css'

class hasib extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <h1>Hasib Iqbal</h1>
                    <h2>Frontend Developer</h2>
                    <div class="image">
                        <img src={HasibPic} alt="Hasib Iqbal" style = {{width:"300px", height:"300px"}} />
                    </div>
                    <p>Master's Student of Global Software Development in HS Fulda</p>
                <a href="#" class="btn">Get In Touch</a>
                </div>
            </div>
        );
    }
}

export default hasib;