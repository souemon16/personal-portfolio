import React from 'react';
import './Testimonial.css';
import './TestimonialTheme.css';
import Sidenav from '../Sidenav/Sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import client1 from '../../Images/Clients/download.jpg';
import client2 from '../../Images/Clients/images.jpg';


const Testimonial = () => {

    return (
        <div className="main-content">
            <Sidenav />
            <div className="testimonial section">
                <div className="Container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Client Speak</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="testi-box">
                            <div className="testi-slider">
                                <div className="testi-slider-container padd-15 shadow-dark">
                                    {/* Testimonial item start  */}
                                    <div className="testi-item shadow-dark">
                                        <FontAwesomeIcon className='quote-icon left' icon={faQuoteLeft} />
                                        <FontAwesomeIcon className='quote-icon right' icon={faQuoteRight} />
                                        <p>
                                            Without doubt Sourav Sarker Emon one of the most talented programmer out there.
                                             I always go back to Warren when I'm out of my depth and he's never failed to deliver what I ask for.
                                             Smart, trustworthy and professional.
                                              You won't be disappointed. </p>
                                        <img src={client1} alt="Client" />
                                        <span>Jhankar Mahbub</span>
                                    </div>
                                    {/* Testimonial item end  */}

                                    {/* Testimonial item start  */}
                                    {/* <div className="testi-item shadow-dark">
                                        <FontAwesomeIcon className='quote-icon left' icon={faQuoteLeft} />
                                        <FontAwesomeIcon className='quote-icon right' icon={faQuoteRight} />
                                        <p>
                                        With Sourav's help, we were able to increase the functionality of our website dramatically while cutting our costs.
                                        Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. </p>
                                        <img src={client2} alt="Client" />
                                        <span>Marci Weirsma</span>
                                    </div> */}
                                    {/* Testimonial item end  */}
                                </div>
                            </div>
                            <div className="testi-slider-nav">
                                <span className="prev outer-shadow hover-in-shadow"><FontAwesomeIcon className='slider-icon' icon={faAngleLeft} /></span>
                                <span className="next outer-shadow hover-in-shadow"><FontAwesomeIcon className='slider-icon' icon={faAngleRight} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;