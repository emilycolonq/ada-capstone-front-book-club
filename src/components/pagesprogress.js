// import React from 'react'
// /* progress passing through needs to be pages pulled from book api from group*/

// const PagesProgressBar = ({bgcolor,progress,height}) => {
//     const Parentdiv = {
//         height: height,
//         width: '100%',
//         backgroundColor: 'whitesmoke',
//         borderRadius: 40,
//         margin: 20,
//     }
//     const Childdiv = {
//         height: '100%',
//         width: `0`,
//         backgroundColor: bgcolor,
//         borderRadius:40,
//         textAlign: 'right'
//     }
//     const progresstext = {
//         padding: 10,
//         color: 'black',
//         fontWeight: 900
//     }
        
//     return (
//     <div style={Parentdiv}>
//         <div style={Childdiv}>
//             <span style={progresstext}>{`${progress} pages`}</span>
//         </div>
//     </div>
//     )
// }
// export default PagesProgressBar;


import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const propTypes = {
    percent: PropTypes.number.isRequired
};

const PercentBar = ({ percent, ...props }) => (
  // spread extra props first to prohibit overriding prop values
    <ProgressBar {...props} now={percent} min={0} max={100} />
);

PercentBar.propTypes = propTypes;

export default PercentBar;





/*to post on group page to be displayed*/


/* Option to update progress pages with form for what page you're currently on */
