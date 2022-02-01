import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleBooksSearch from "./components/searchbar/googlebooksearch";  
import Navbar from "./components/navbar/navbar.js";

function App() {
  return (
      <div className= 'App'>
        <Navbar />
      </div>
  );
}

export default App; 
