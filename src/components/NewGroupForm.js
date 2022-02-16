import React from 'react';
import axios from "axios"; 


const NewGroupForm = (props) => {

    const [formValue, setformValue] = React.useState({
        name: '',
        title: props.title ,
        author: props.author,
        pages: props.page
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        // store the states in the form data
        const groupFormData = new FormData();
        groupFormData.append("group_name", formValue.name)
        groupFormData.append("book_title", formValue.title)
        groupFormData.append("book_author", formValue.author)
        groupFormData.append("book_pages", formValue.pages)
    
        console.log("test")
        try {
          // make axios post request
            const response = axios({
                method: "post",
                url: "https://ada-capstone-book-club.herokuapp.com/adabookclub/groups/",
                data: groupFormData,
        });
        } catch(error) {
            console.log(error)
        }
    }

    const nameChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
    });
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Create Group</h2>
        <input
            type="text"
            name="name"
            value={formValue.title}

        />
        <input
            type="text"
            name="name"
            value={formValue.author}
        />
        <input
            type="text"
            name="name"
            value={formValue.pages}
        />
        <h3>Enter Group Name Here:</h3>
            <input
                type="text"
                name="name"
                value={formValue.name}
                onChange={nameChange}
            />
        <button type="submit">
            Submit
        </button>
        </form>
    )
};

export default NewGroupForm;
