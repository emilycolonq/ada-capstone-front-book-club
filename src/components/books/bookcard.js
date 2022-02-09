import React from 'react';
import NewGroupForm from './NewGroupForm';
import Popup from '../popup';
import { useState } from 'react';

const BookCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <p>{props.author}</p>
                <p>Pages:{props.page}</p>
            </div>
            <div>
                <input
                type="button"
                value="Create Group"
                onClick={togglePopup}/>
                {isOpen && <Popup
                content={
                    <p><NewGroupForm /></p>
                }
                handleClose={togglePopup}
                />}
            </div>
            {/* <button className='new-board' onClick={togglePopup}> Create Group</button> */}
        </div>
    )
}

export default BookCard;
