import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BookClubRoutes from "./routes/BookClubRoutes";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/dashboard";

ReactDOM.render(
  <React.StrictMode>
    <BookClubRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );
