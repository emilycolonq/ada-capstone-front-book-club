import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import GoogleBooksSearch from "./components/searchbar/googlebooksearch";  
import Navbar from "./components/navbar/navbar.js";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
// import Books from "./components/books/books.js";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
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
