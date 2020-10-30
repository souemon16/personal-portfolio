import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import './About.css';
import './AboutTheme.css';

const About = () => {
    return (
        <div className='main-content'>
            <Sidenav />
            <div className="about section">
                <div className="Container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>About Me</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="about-content padd-15">
                            <div className="row">
                                <div className="about-text padd-15">
                                    <h3>I'm Sourav Sarker Emon and <span>Junior Web Developer</span></h3>
                                    <p>Hi! My name is Sourav Sarker Emon. I am a Web Developer, and I'm very passionate and dedicated
                                     to my work. I have acquired the skills and knowledge necessary to make your project a success. 
                                     I enjoy every step of the design process, from discussion and collaboration. 
                                     </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="personal-info padd-15">
                                   Personal Info
                                </div>
                                <div className="skills padd-15">
                                    Skills
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;