import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import PercentBar from "./pagesprogress";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Bulletin from "./discussion/Bulletin";
import { useParams, Outlet } from "react-router-dom";

const axios = require("axios");

const GroupPage = (props) => {

  // Book State and Event Handlers
  const [bookAuthor, setBookAuthor] = useState("Book Author");
  const [bookTitle, setBookTitle] = useState("Book Title");
  const [groupName, setGroupName] = useState("Book Club");
  const [bookPages, setBookPages] = useState(0);
  const [discussions, setDiscussions] = useState([]);
  const { groupId } = useParams();

  useEffect(() => {
    const axios = require("axios");
    axios
      .get(
        `https://ada-capstone-book-club.herokuapp.com/adabookclub/groups/${groupId}`
      )
      .then((response) => {
        setBookAuthor(response.data.book_author);
        setBookTitle(response.data.book_title);
        setGroupName(response.data.group_name);
        setBookPages(response.data.book_pages);
        setDiscussions(response.data.discussions);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      });
  }, [setBookAuthor, setBookTitle, setGroupName, setBookPages, setDiscussions, groupId]);


  const [maxScore] = useState(bookPages);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore((prevScore) => Math.max(0, Math.min(prevScore, maxScore)));
  }, [maxScore]);

  const fetchData = () => {
    setScore((score) => score + 1);
  };

  const scoreLabel = `${score}/${maxScore}`;
  const percentCorrect = (score * 100) / maxScore;
  const percentCorrectLabel = `${Number(percentCorrect).toFixed(2)}%`;


  //     return (
  //         <div className="App">
  //             <Row className="justify-content-md-center">
  //                 <Col md={{ span: 6, offset: 0 }} sm ={6} xs={6}>
  //                     <h2>Welcome to {props.name}</h2>
  //                     <p>We are reading {props.title} by {props.author}</p>
  //                 </Col>
  //             </Row>
  //             <Row className="justify-content-md-center">
  //                 <Col md={{ span: 6, offset: 0 }} sm ={6} xs={6}>
  //                     <h1>User Page Progress</h1>
  //                     <div>Page {score} out of {maxScore} total pages</div>
  //                     <ProgressBar
  //                         animated
  //                         min={0}
  //                         max={maxScore}
  //                         now={score}
  //                         label={scoreLabel}
  //                     />
  //                     <div>Percentage finished</div>
  //                     <PercentBar label={percentCorrectLabel} percent={percentCorrect} />
  //                     <button type="button" onClick={() => fetchData()}>
  //                         Add Page
  //                     </button>
  //                 </Col>
  //             </Row>
  //         </div>
  //     );
  // }
  return (
    <div className="App">
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
          <h2>Welcome to {groupName}</h2>
          <p>
            We are reading {bookTitle} by {bookAuthor}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
          <h1>User Page Progress</h1>
          <div>
            Page {score} out of {bookPages} total pages
          </div>
          <ProgressBar
            animated
            min={0}
            max={maxScore}
            now={score}
            label={scoreLabel}
          />
          <div>Percentage finished</div>
          <PercentBar label={percentCorrectLabel} percent={percentCorrect} />
          <button type="button" onClick={() => fetchData()}>
            Add Page
          </button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
          <p>
            {bookTitle} by {bookAuthor}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
          <p>
            <Bulletin
              discussions={discussions}
              setDiscussions={setDiscussions}
            />
          </p>
        </Col>
      </Row>
      <Outlet />
    </div>
  );
};

export default GroupPage;

// const Group = (props) => {

// const selectGroup = () => {
//     const newSelected = {
//         name: props.group.name,
//         group_id: props.id
//     }
//     props.current(newSelected);
// }
//     return (
//         <div>
//             <Row className="justify-content-md-center">
//                 <Col md={{ span: 6, offset: 0 }} sm ={6} xs={6}>
//                     <h3 className="page-progress">Progress Bar</h3>
//                         <PagesProgressBar bgcolor="yellow" progress='30'  height={30} />
//                         <PagesProgressBar bgcolor="orange" progress='60'  height={30} />
//                 </Col>
//             </Row>
//         </div>
//         <h1 className="group-item" onClick={selectGroup}> {props.group.name} </h1>
//     )
// }

// export default Group;
