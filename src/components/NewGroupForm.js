import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import './Form.css';
import Group from './group';

const NewGroupForm = (props) => {
    const baseData = {name: '', user: ''};
    const [formData, setFormData] = useState(baseData);

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onGroupSubmit({name: formData.name, user: formData.user});
        setFormData(baseData);
    }
        
    const nameChange = (event) => {
        setFormData({...formData, name: event.target.value});
    }

    // const ownerChange = (event) => {
    //     setFormData({...formData, owner: event.target.value});
    // }

    return (
        <div >
            <h3>Create Group</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>{props.title} by {props.author}</h3>
                    <p>Pages:{props.page}</p>
                    <p>Group Name: </p>
                    <input type="text" name="name" value={formData.title} onChange={nameChange}/>
                </label>
                {/* <label>
                <p> Owner: </p>
                <input type="text" name="owner" value = {formData.owner} onChange={ownerChange}/>
            </label> */}
            {/* </fieldset> */}
            <button type="submit">Submit</button>
            </form>
            <p><Group title = {props.title} author= {props.author} page = {props.page}/></p>
        </div>
        );
    }

export default NewGroupForm;

