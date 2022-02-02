import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import './Form.css';

const NewGroupForm = (props) => {
    const baseData = {title: '', user: ''};
    const [formData, setFormData] = useState(baseData);

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onGroupSubmit({title: formData.title, user: formData.user});
        setFormData(baseData);
    }
        
    const titleChange = (event) => {
        setFormData({...formData, title: event.target.value});
    }

    // const ownerChange = (event) => {
    //     setFormData({...formData, owner: event.target.value});
    // }

    return (
        <div >
            <h3>Create Group</h3>
            <form onSubmit={handleSubmit}>
            {/* <fieldset> */}
                <label>
                <p>Group Title: </p>
                <input type="text" name="title" value={formData.title} onChange={titleChange}/>
                </label>
                {/* <label>
                <p> Owner: </p>
                <input type="text" name="owner" value = {formData.owner} onChange={ownerChange}/>
            </label> */}
            {/* </fieldset> */}
            <button type="submit">Submit</button>
            </form>
            </div>
        );
    }

export default NewGroupForm;

