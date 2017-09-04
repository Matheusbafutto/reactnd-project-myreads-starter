import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import BookList from './BookList'

class SearchPage extends Component {

  state = {
    booksSearched: [],
  }

  searchBooks(regExp) {
    if (regExp !== undefined) {
      BooksAPI.search(regExp).then((result) => {
        console.log(result);
        this.setState({
          booksSearched: result
        });
      });
    } 

  }

  handleChange = (event) => {
    this.searchBooks(event.target.value);
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={this.state.booksSearched}
            onBookChange={this.props.onBookChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
