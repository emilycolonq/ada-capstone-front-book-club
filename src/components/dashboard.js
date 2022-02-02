import React from 'react';
import Books from "./books/books";
import Sidebar from './sidebar';
import Group from './group';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





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
        <Books/>
    </div>
    );
};

export default Dashboard;