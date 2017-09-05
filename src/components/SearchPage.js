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
  */
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  /**
    Searches for books within the server and assigns them to booksSearched state variable
    @param {string} regExp - regular expression to match book's title and author
  */
  searchBooks(regExp) {
    BooksAPI.search(regExp).then((result) => {
      this.setState({
        booksSearched: result
      });
    });

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
