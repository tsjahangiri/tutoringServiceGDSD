import React, { Component } from 'react';
import HasibPic from '../../assets/hasib.jpg';
// import '../../assets/styles/hasib.css'

class hasib extends Component {
    render() {
        return (
            <div>
                <div class="containerPersonal">
                    <div class="image">
                        <img src={HasibPic} alt="Hasib Iqbal" style = {{width:"300px", height:"300px", borderRadius:"50%"}} />
                    </div>
                    <br/>
                    <h1>Hasib Iqbal</h1>
                    <h2>Frontend Developer</h2>
                    <br/>
                    <p>Master's Student of Global Software Development in HS Fulda</p>
                    <p>Email: <email>hasib.iqbal@informatik.hs-fulda.de</email></p>
            
                </div>
            </div>
        );
    }
}

export default hasib;