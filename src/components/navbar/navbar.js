import React from 'react';
// import {Link} from 'react-router-dom';
// import './navbar.css'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu} from './NavbarElements';
    
const Navbar = () => {
    return (
        <Nav>
            <Bars />
            <NavMenu>
                <h1 className= "navbarLogo">Bookclub</h1>
                <NavLink to='/' activeStyle>Home</NavLink>
                <NavLink to='/dashboard' activeStyle>Dashboard</NavLink>
            </NavMenu>
        </Nav>
    );
};


// const Navbar = () => {
//     return (
//         <div className = "sum">
//             <h1 className= "navbarLogo">Bookclub</h1>
//                 <ul className= "navLinks">
//                     <li className = "link">
//                         <Link to= '/'>Home</Link>
//                     </li>
//                     <li><Link to= '/dashboard'>Dashboard</Link></li>
//                 </ul>
//         </div>
//     );
// };

export default Navbar;