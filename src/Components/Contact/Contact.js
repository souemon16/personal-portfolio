import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import './Contact.css';
import './ContactTheme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="main-content">
            <Sidenav />
            <div className="contact section">
                <div className="Container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* Contact Info Item  */}
                        <div className="contact-info-item padd-15">
                            <div className="contact-icon">
                                <FontAwesomeIcon className='fa-icon' icon={faPhoneAlt} />
                            </div>
                            <h4>Call Me On</h4>
                            <p>(+88) 013 030 818 01</p>
                        </div>
                        {/* Contact Info Item  */}

                        {/* Contact Info Item  */}
                        <div className="contact-info-item padd-15">
                            <div className="contact-icon">
                                <FontAwesomeIcon className='fa-icon' icon={faMapMarkerAlt} />
                            </div>
                            <h4>Find Me</h4>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        {/* Contact Info Item  */}

                        {/* Contact Info Item  */}
                        <div className="contact-info-item padd-15">
                            <div className="contact-icon">
                                <FontAwesomeIcon className='fa-icon' icon={faEnvelope} />
                            </div>
                            <h4>Email</h4>
                            <p>souemon16@gmail.com</p>
                        </div>
                        {/* Contact Info Item  */}
                    </div>

                    <div className="row">
                        <div className="contact-form padd-15">
                            <div className="row">
                                <div className="form-item col-6">
                                    <div className="gorm-group">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name*" />
                                    </div>
                                </div>

                                <div className="form-item col-6">
                                    <div className="gorm-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email*" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="gorm-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject*" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="gorm-group">
                                        <textarea name="message" id="" cols="30" rows="10" className="form-control" placeholder="Messages...."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 padd-15">
                                    <button type="submit" className="btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;