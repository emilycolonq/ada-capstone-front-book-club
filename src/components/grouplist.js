// import React from 'react';
// import axios from 'axios';
// import GroupPage from './grouppage';
// import { useNavigate } from 'react-router';

// export default class GroupList extends React.Component {
//     state = {
//         groups: []
//     }

//     componentDidMount() {
//         axios.get("https://ada-capstone-book-club.herokuapp.com/adabookclub/groups/")
//             .then(res => {
//             const groups = res.data;
//             this.setState({ groups });
//     })
//     }
//     // LoginLayout() {
//     //     let navigate = useNavigate(); 
//     //     const routeChange = () => { 
//     //         let path = <GroupPage/> 
//     //         navigate(path);
//     //     }
//     // } 


//     render() {
//         return (
//         <ul>
//             {
//             this.state.groups
//                 .map(group =>
//                 <li key={group.id}>{group.group_name}</li>
//                 )
//             }
//         </ul>
//         )
//     }
// }






// import React, {useState, useEffect} from 'react';
// import GroupPage from './grouppage';
// import axios from 'axios';

// const GroupList = (props) => {
//     const [groupList, setGroupList] = useState([]);
//     let url = process.env.REACT_APP_BACKEND_BOARDS;


//     useEffect(() => {
//         getGroupListTest();
//     }, []);
    
//     const getGroupListTest = () => {
//         axios.get(url)
//         .then((response) => {
//             setGroupList(response.data);
//         })
//     }


//     return(
//         <div className= {groupList}>
//             {
//                 groupList.map((oneGroup, i) => {
                    
//                     return <GroupPage 
//                         id = {oneGroup.id}
//                         name = {oneGroup}
//                         title = {oneGroup.title}
//                         author = {oneGroup.author}
//                         page = {oneGroup.page}
//                         />
//                 })
//             }
//         </div>
//     )
// }

// export default GroupList;