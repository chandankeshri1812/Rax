import React from 'react'
import { Link } from 'react-router-dom';
// import {logo} from "../../public/logo.png"

import { BsFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="footer">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-logo">
                <img src="logo1.png" alt="Logo" />
                <h2 style={{ color: '#e31c25'  }}>Rax</h2>
              </div>
              <div className="footer-links">
                <ul>
                  <li><Link to="/">Home</Link> </li>
                  <li><Link to="/courses">Courses</Link> </li>
                  <li><Link to="/createCourse">Create Course</Link> </li>
                  <li><Link to="/professor">Professor</Link> </li>
                  <li><Link to="/createprofessor">Create Professor</Link> </li>
                </ul>
              </div>
              <div className="footer-social">
                <ul>
                  {/* <li><a href="www.google.com">  <BsFacebook /> </a></li> */}

                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Rax. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>


    </>



  )
}

export default Footer;