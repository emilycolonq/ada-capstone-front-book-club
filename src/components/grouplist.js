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