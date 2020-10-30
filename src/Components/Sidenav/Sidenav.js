import React from 'react';
import './Sidenav.css';
import './SidenavTheme.css';
import {
    Link
  } from "react-router-dom";
import { faHome, faUser, faBriefcase, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidenav = () => {
    return (
        <div className="aside">
        <div className="logo">
        <Link className='logo-title' to='/'>Sourav Emon</Link>
        </div>
        
         <div className="nav-toggler">
             <span></span>
         </div>

        <ul className="Nav">
            <li> <Link className='nav-link' to=""> <FontAwesomeIcon icon={faHome} /> Home </Link> </li>
            <li> <Link className='nav-link' to=""> <FontAwesomeIcon icon={faUser} /> About </Link> </li>
            <li> <Link className='nav-link' to=""> <FontAwesomeIcon icon={faBriefcase} /> Projects </Link> </li>
            <li> <Link className='nav-link' to=""> <FontAwesomeIcon icon={faEnvelope} /> Blogs </Link> </li>
            <li> <Link className='nav-link' to=""> <FontAwesomeIcon icon={faComments} /> Contacts </Link> </li>
        </ul>
        
        {/* Copyright  */}
        <div className="copyright-text">
            &copy; 2020 All Rights Are Reserved
        </div>
 </div>
    );
};

export default Sidenav;