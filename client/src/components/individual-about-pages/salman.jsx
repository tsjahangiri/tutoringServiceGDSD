import React, { Component } from 'react';
import SalmanPic from '../../assets/salman.jpeg';
// import '../../assets/styles/salman.css'

class salman extends Component {
    render() {
        return (
            <div class="container">
                <div class="portrait"><img src={SalmanPic}/></div>
                
                <div class="title"> <span class="titlespan"><strong>Mohammad Salman Haydar</strong></span><br/>
                    Masters Student<br/>
                    Global Software Development<br/>
                    Student ID: 1380756
                    <br/>
                    <a href="https://www.hs-fulda.de" target="_blank">Fulda University of Applied Science</a>
                </div>
                <div class="clear"></div>
                    <hr/>
                    <p>
                        <b>Short bio:</b> I'm a masters student studying Global Software Development in Hochschule Fulda. 
                        I am now in my first semester. I've completed my undergraduate degree from Daffodil 
                        International University in 2017. Later on I joined in the industry to gather some experince. 
                        I was in the industry for 4 years. 
                    <br/>
                    <br/>
            Links: --<a href="https://scholar.google.com/citations?hl=en&user=jFAWluoAAAAJ" target="_blank"><u>Google scholar</u></a>
                   --<a href="https://www.linkedin.com/in/salman-haydar/" target="_blank"><u>LinkedIn</u></a>
                   --<a href="https://www.kaggle.com/salmanhaydar" target="_blank"><u>Kaggle</u></a>
                   <br/>
                   contact me: salmanhaydar3(at)gmail(.)com
                    </p>
            </div>
            
        );
    }
}

export default salman;