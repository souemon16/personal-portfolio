import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import './About.css';
import './AboutTheme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

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

                                    <div className="row">
                                        <div className="info-item padd-15">
                                            <p>Birthday : <span>16 August, 2001</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Age : <span>19</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Email: <span>souemon16@gmail.com</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Phone : <span>(+88)013030-81801</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Adress : <span>Dhaka, Bangladesh</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Freelance : <span>Available</span></p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="buttons">
                                            <a className='btn' href="#">Download CV</a>
                                            <a className='btn' href="#">Hire Me</a>
                                        </div>
                                    </div>

                                </div>
                                <div className="skills padd-15">
                                    <div className="row">
                                        <div className="skill-item padd-15">
                                            <h5>HTML</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: "90%" }}></div>
                                                <div className="skill-percent">90%</div>
                                            </div>
                                        </div>

                                        <div className="skill-item padd-15">
                                            <h5>CSS</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: "85%" }}></div>
                                                <div className="skill-percent">85%</div>
                                            </div>
                                        </div>

                                        <div className="skill-item padd-15">
                                            <h5>Bootstrap</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: "91%" }}></div>
                                                <div className="skill-percent">91%</div>
                                            </div>
                                        </div>

                                        <div className="skill-item padd-15">
                                            <h5>JavaScript</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: "78%" }}></div>
                                                <div className="skill-percent">78%</div>
                                            </div>
                                        </div>

                                        <div className="skill-item padd-15">
                                            <h5>React JS</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: "76%" }}></div>
                                                <div className="skill-percent">76%</div>
                                            </div>
                                        </div>

                                        <div className="skill-item padd-15">
                                            <h5>Node JS</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: "70%" }}></div>
                                                <div className="skill-percent">70%</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="education padd-15">
                                    <h3 className="title">Education</h3>
                                    <div className="row">
                                        <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                        <div className="circle-dot"></div>
                                        <h6 className="timeline-date">
                                        <FontAwesomeIcon icon={faCalendar} /> 2014-2016
                                        </h6>
                                        <h4 className="timeline-title">S.S.C</h4>
                                        <p className="timeline-text"></p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course padd-15">
                                    <h3 className="title">Courses</h3>
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