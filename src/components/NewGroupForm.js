import React, {useState, Component} from 'react';
// import PropTypes from 'prop-types';
// import './Form.css';
// import Group from './group';
import axios from "axios"; 


const NewGroupForm = (props) => {

    const [formValue, setformValue] = React.useState({
        name: ''
    });

    const handleSubmit = async() => {
        // store the states in the form data
        const groupFormData = new FormData();
        groupFormData.append("group_name", formValue.name)
        groupFormData.append("book_title", props.title)
        groupFormData.append("book_author", props.author)
        groupFormData.append("book_pages", props.page)
    
        try {
          // make axios post request
            const response = await axios({
                method: "post",
                url: "https://ada-capstone-book-club.herokuapp.com/adabookclub/groups/",
                data: groupFormData,
                // headers: { "Content-Type": "multipart/form-data" },
        });
        } catch(error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
    });
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Create Group</h2>
        <p>{props.title} by {props.author} with {props.page} pages</p>
        <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleChange}
        />
        <button type="submit">
            Submit
        </button>
        </form>
    )
};

export default NewGroupForm;





// class NewGroupForm extends Component {
//     state = {
//         name: '',
//         title: '',
//         author:'',
//         page: '',
// };

// handleSubmit = event => {
//     let url = process.env.BOOK_CLUB_BACKEND;
//     event.preventDefault();
//     const group = {
//         name: this.state.name,
//         title: this.props.title,
//         author: this.props.author,
//         page: this.props.page

//     }
//     axios.post('url', { group })
//         .then(res=>{
//             console.log(res);
//             console.log(res.data);
//             window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
//     })
// }

// handleChange = event =>{
//     this.setState({ name: event.target.value});
// }

// render() {
//     return (
//         <form onSubmit = { this.handleSubmit }>
//             <h1>Create Group</h1>
//             <p>{this.props.title} by {this.props.author} with {this.props.page} pages</p>
//             <label> Group Name:
//                 <input type = "text" name = "name" onChange= {this.handleChange}/>
//             </label>
//             <button type = "submit"> Submit </button>
//         </form>
//     );
// }
// }
// export default NewGroupForm;



// const NewGroupForm = (props) => {
//     const baseData = {name: ''};
//     const [formData, setFormData] = useState(baseData);
//     let url = process.env.BOOK_CLUB_BACKEND;

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         props.onGroupSubmit({name: formData.name});
//         setFormData(baseData);

//         axios.post(url, { baseData })
//             .then( window.location = "/retrieve" 
//             )
//         alert(`group has been created!`)
//     }
        
//     const nameChange = (event) => {
//         setFormData({...formData, name: event.target.value});
//     }

//     return (
//         <div >
//             <h2>Create Group</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     <p>{props.title} by {props.author} with {props.page} pages</p>
//                     <h5>Group Name: </h5>
//                     <input type="text" name="name" value={formData.title} onChange={nameChange}/>
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//         );
//     }

// export default NewGroupForm;

