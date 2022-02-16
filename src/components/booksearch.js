import React from "react";


const BookSearch = (props) => {
  return (
    <div className="book-search">
      <form onSubmit={props.searchBook} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};


export default BookSearch;
