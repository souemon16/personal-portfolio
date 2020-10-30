import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import './ExtraCss.css';
import profile from '../../Images/profile.png';
import Sidenav from '../Sidenav/Sidenav';

const Home = () => {
    return (
        <div className='main-container'>

            <Sidenav/>

            <div className="main-content">
                    <section className="home section">
                        <div className="Container">
                            <div className="intro">
                                <img src={profile} alt="Profile" className="img-fluid shadow-dark"/>
                                <h1>Sourav Sarker Emon</h1>
                                <p>I'm a Web Developer</p>
                                <div className="social-links">
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faMediumM} /></a>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </div>
    );
};

export default Home;