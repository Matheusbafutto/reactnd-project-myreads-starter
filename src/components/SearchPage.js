import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import BookList from './BookList'

/**
  Class representing the app's search page
  @extends Component
*/
class SearchPage extends Component {

  /**
    SearchPage's component inner state
    @property {book[]} booksSearched - array of books searched within the text input controlled component
  */
  state = {
    booksSearched: [],
  }

  /**
    Creates an instance of SearchPage component
    @param {object} props - props from parent component
    @param {function} props.onBookChange - handler for Book select controlled component
    @param {book[]} props.booksOnShelves - books in shelves on main page
  */
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
    this.matchBookWithShelves = this.matchBookWithShelves.bind(this);
  }

  /**
    Searches for books within the server and assigns them to booksSearched state variable
    @param {string} regExp - regular expression to match book's title and author
  */
  searchBooks(regExp) {
    BooksAPI.search(regExp).then((result) => {
      result = this.mapResult(result, this.matchBookWithShelves);
      this.setState({
        booksSearched: result
      });
    });

  }

  /**
    Maps through the books array given
    @param {book[]} booksSearched - array of books
    @param {function} checker - function to be called on mapping the array
    @return {book[]} - same booksSearched array mapped with function checker
  */
  mapResult(booksSearched, checker) {
    return booksSearched.map(checker);
  }

  /**
    Finds specified book on props.booksOnShelves and places shelf property on it
    @param {book} book - book which needs to be found in props.booksOnShelves
    @return {book} - new book with shelf if aplicable
  */
  matchBookWithShelves(book) {
    let bookFound = this.props.booksOnShelves.find((bookOnshelf) => ( book.id === bookOnshelf.id));
    return (bookFound !== undefined) ? bookFound : book;
  }

  /**
    Basic handler for the text input controlled component
    @param {event} event - event trigered on text input change
  */
  handleChange(event) {
    this.searchBooks(event.target.value);
  }

  /**
    Renders SearchPage component
  */
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
