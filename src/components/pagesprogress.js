import React from 'react'
/* progress passing through needs to be pages pulled from book api from group*/

const PagesProgressBar = ({bgcolor,progress,height}) => {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 20,
    }
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
    }
    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }
        
    return (
    <div style={Parentdiv}>
        <div style={Childdiv}>
            <span style={progresstext}>{`${progress} pages`}</span>
        </div>
    </div>
    )
}
export default PagesProgressBar;





/*to post on group page to be displayed*/


/* Option to update progress pages with form for what page you're currently on */
