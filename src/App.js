import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/navbar/navbar.js";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
// import Login from './components/logInOut/login';
// import Logout from './components/logInOut/logout';


function App() {
  return (
    <div className="Logs">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' />
          <Route path='/logout'/>
        </Routes>
      </Router>
    </div>
  );
}


// function App() {
//   return (
//       <div className= 'App'>
//         <Navbar />
//       </div>
//   );
// }

export default App; 
