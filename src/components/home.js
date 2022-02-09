import React from 'react';
// import './pages/pages.css';
import background from "./pic2.jpg";

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
        }}>
            <div
                style = {{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    alignItems: 'Center',
                    backgroundColor: 'black',
                    backgroundPosition: 'center',
                    color: 'white',
                    paddingLeft: '20px',
                    opacity: '0.8',
                    paddingRight: '20px',
                    fontSize: '50' }}>
                <h1>Welcome to Bookclub</h1>
                <p>Come here to gather with friends for digital book club.</p>
            </div>
        </div>
    );
};

export default Home;