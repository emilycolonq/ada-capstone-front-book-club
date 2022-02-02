import React from 'react'
/* progress passing through needs to be pages pulled from book api from group*/

const ProgressBar = ({bgcolor,progress,height}) => {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
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
export default ProgressBar;





/*to post on group page to be displayed*/

/* <h3 className="heading">Progress Bar</h3>
<ProgressBar bgcolor="orange" progress='30'  height={30} />
<ProgressBar bgcolor="red" progress='60'  height={30} />
<ProgressBar bgcolor="#99ff66" progress='50'  height={30} /> */


/* Option to update progress pages with form for what page you're currently on */
