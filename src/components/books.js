import React, {Component} from 'react';
import BookSearch from './booksearch';
import request from 'superagent';
import BookList from './booklist';
import 'bootstrap/dist/css/bootstrap.min.css';

class Books extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: this.state.searchField})
            .then((data) => {
                this.setState({books: [...data.body.items]})
            })
    }
    
    handleSearch = (e) => {
        this.setState({searchField: e.target.value})
    }
    
    
    render(){
        return(
            <div>
                <BookSearch searchBook= {this.searchBook} handleSearch = {this.handleSearch}/>
                <div className="container-fluid movie-app">
                    <div className='row'>
                        <BookList books={this.state.books} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;