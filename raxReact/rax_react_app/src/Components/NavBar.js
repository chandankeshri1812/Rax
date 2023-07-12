import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>

            <div className="navbar">

                <div className="logo_img_nav">
                    <img src="logo1.png" alt="Logo" />
                    <li className='nav_bar_li'>
                        <Link to="/" style={{ color: '#e31c25'  }}>Rax</Link>
                    </li >
                </div>
                <div className="navbarMiddle">


                    <div className="nav_left">
                        <li className='nav_bar_li'>
                            <Link to="/">Home</Link>
                        </li >
                        <li className='nav_bar_li'>
                            <Link to="/courses">Courses</Link>
                        </li >
                        <li className='nav_bar_li'>
                            <Link to="/createCourse">Create Course</Link>
                        </li >
                        <li className='nav_bar_li'>
                            <Link to="/professor">Professor</Link>
                        </li >
                        <li className='nav_bar_li'>
                            <Link to="/createprofessor">Create Professor</Link>
                        </li >

                    </div>
                    <div className="nav_right">
                        <li className='nav_bar_li'> <Link to="/signin">Signin</Link>  </li >
                        <li className='nav_bar_li'>    <Link to="/login">Login</Link>  </li >
                    </div>
                </div>
            </div>





        </>



    )
}

export default NavBar;