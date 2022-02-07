import React from 'react';
import Books from "./books/books";
import Sidebar from './sidebar';
import Group from './group';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import GoogleLoginComponent from './logInOut/googlogcomponent';





const Dashboard = () => {
    return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'Left',
            // alignItems: 'Center',
            height: '100vh'
        }}>
        <Sidebar />
        <Outlet />
        <GoogleLoginComponent/>
        <Books/>
    </div>
    );
};

export default Dashboard;