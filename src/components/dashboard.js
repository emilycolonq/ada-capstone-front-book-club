import React from 'react';
import Books from "./books/books";

const Dashboard = () => {
    return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'Left',
            // alignItems: 'Center',
            height: '100vh'
    }}>
        <h1>My Dashboard</h1>
        <Books/>
    </div>
    );
};

export default Dashboard;