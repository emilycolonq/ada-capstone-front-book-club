import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Dashboard from './pages/dashboard';


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Router>
//         <Routes>
//             <Route path= '/' element= {<App/>}/>
//             <Route path= '/dashboard' element= {<Dashboard/>}/>
//         </Routes>
//     </Router>,
// document.getElementById('root'));