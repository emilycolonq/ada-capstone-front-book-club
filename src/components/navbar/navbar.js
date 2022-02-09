import React from 'react';
// import Login from '../logInOut/login';
// import Logout from '../logInOut/logout';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu} from './NavbarElements';
    
const Navbar = () => {
    return (
        <Nav classname ="justify-content-center">
            <Bars bg="dark" variant="dark" expand="lg" sticky="top"/>
            <NavMenu>
                <h1 classname= "navbar navbar-expand-lg navbar-light bg-light fixed-top py-lg-0 ">Bookclub</h1>
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