import React from 'react';
import BookCard from './bookcard';

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                        key = {i}
                        image = {book.volumeInfo.imageLinks.thumbnail}
                        title = {book.volumeInfo.title}
                        author = {book.volumeInfo.authors}
                        published = {book.volumeInfo.publishedDate}
                        page = {book.volumeInfo.pages}
                        />
                })
            }
        </div>
    )
}

export default BookList;