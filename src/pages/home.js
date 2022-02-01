import React from 'react';
// import './pages/pages.css';
import background from "./pic1.png";

function Home() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Center',
                alignItems: 'Center',
                height: '100vh',
                backgroundImage: `url(${background})`,
                backgroundSize: 'Cover',
                backgroundRepeat: 'NoRepeat',
                width: '100%',
                height: '100vh'
        }}>
            <h1>Future home page!</h1>
        </div>
    );
};

export default Home;