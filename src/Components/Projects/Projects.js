import React from 'react';
import './Projects.css';
import './ProjectsTheme.css';
import Sidenav from '../Sidenav/Sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import portfolio1 from '../../Images/Projects/creative agency front.png';
import portfolio2 from '../../Images/Projects/travel guru.png';
import portfolio3 from '../../Images/Projects/volunteer network front.png';
import blog1 from '../../Images/Blogs/vlog1.PNG';

const Projects = () => {
    // const filterContainer = document.querySelectorAll(".portfolio-filter"),
    //       filterBtns = filterContainer.children,
    //       totalFilterBtn = filterBtns.length,
    //       portfolioItems = document.querySelectorAll(".portfolio-item"),
    //       totalPortfolioItem = portfolioItems.length;

    //       for(let i=0; i<totalFilterBtn; i++){
    //           filterBtns[i].addEventListener("click", function(){
    //               filterContainer.querySelector(".active").classList.remove("active");
    //               this.classList.add("active");
    //           })
    //       }

    return (
       <div className="main-content">
           <Sidenav />
            <section className="projects section">
            <div className="Container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-filter padd-15">
                        <button type='' className='active' data-filter='all'>All</button>
                        <button type='' data-filter='web-design'>Web Design &#38; Development</button>
                        <button type='' data-filter='wordpress'>Wordpress</button>
                        <button type='' data-filter='blogs'>Blogs</button>
                    </div>
                </div>
                <div className="row portfolio-items">
                    {/* Portfolio Item  */}
                    <div className="portfolio-item padd-15" data-category="web-design">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={portfolio1} alt="Portfolio 1"/>
                            </div>
                            <div className="portfolio-info">
                                <h4>Creative Agency</h4>
                                <div className="icon">
                                <FontAwesomeIcon className='fa' icon={faSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item  */}

                     {/* Portfolio Item  */}
                     <div className="portfolio-item padd-15" data-category="web-design">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img style={{height: '200px'}} src={portfolio2} alt="Portfolio 2"/>
                            </div>
                            <div className="portfolio-info">
                                <h4>Travel Guru</h4>
                                <div className="icon">
                                <FontAwesomeIcon className='fa' icon={faSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item  */}

                     {/* Portfolio Item  */}
                     <div className="portfolio-item padd-15" data-category="web-design">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={portfolio3} alt="Portfolio 3"/>
                            </div>
                            <div className="portfolio-info">
                                <h4>Volunteer Network</h4>
                                <div className="icon">
                                <FontAwesomeIcon className='fa' icon={faSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item  */}

                    {/* Portfolio Item  */}
                     <div className="portfolio-item padd-15" data-category="blogs">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={blog1} alt="Blog 1"/>
                            </div>
                            <div className="portfolio-info">
                                <h4>Interesting Things in JS</h4>
                                <div className="icon">
                                <FontAwesomeIcon className='fa' icon={faSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item  */}
                </div>
            </div>
        </section>
       </div>
    );
};

export default Projects;