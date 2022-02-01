import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
    return (
        <div className = "sum">
            <h1 className= "navbarLogo">Bookclub</h1>
                <ul className= "navLinks">
                    <li className = "link">
                        <Link to= '/'>Home</Link>
                    </li>
                    <li><Link to= '/dashboard'>Dashboard</Link></li>
                </ul>
        </div>
    );
};

export default Navbar;