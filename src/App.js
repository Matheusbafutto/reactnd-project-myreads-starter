import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import update from 'immutability-helper'
import Bookshelf from './components/Bookshelf'
import SearchPage from './components/SearchPage'

/**
  Class representing the main App component
  @extends React.Component
*/
class BooksApp extends React.Component {


  /**
    BooksApp's component inner state
    @property {book[]} booksOnShelves - An array of books with clearly defined bookshelves
  */
  state = {
    booksOnShelves: [],
  }

  /**
    Creates an instance of BooksApp components
    @params {object} props - properties of the component
  */
  constructor(props) {
    super(props);
    this.handleBookShelfChange = this.handleBookShelfChange.bind(this);
  }

  /**
    Function which returns a new array with all elements of the array param given but without the book specified
    @param {book} book - book to be removed from the array
    @param {book[]} array - original array of books
    @returns {book[]} - New array with all books from the array param except the book sepcified in the book param
  */
  removeBookFromArray(book, array) {
    return array.filter( bookAvailable => {
      return bookAvailable.title !== book.title
    });
  }

  /**
    Function that handles shelf changes in both the state and server
    @param {string} newShelf - New shelf to be assigned to the book within the booksOnShelves state variable
    @param {book} book - book whose shelf atribute needs to be changed
  */
  handleBookShelfChange(newShelf, book) {

    let updatedBooksAvailable = this.removeBookFromArray(book, this.state.booksOnShelves);

    let updatedBook = update(book, {
      shelf:{ $set:newShelf }
    })

    if ( newShelf !== 'None' ) {
      updatedBooksAvailable = update(updatedBooksAvailable, { $push:[updatedBook] });
    }

    this.setState({
      booksOnShelves: updatedBooksAvailable
    });

    BooksAPI.update(updatedBook, updatedBook.shelf);

  }

  /**
    Once BooksApp has rendered, makes an API request to pull books within shelves from server
  */
  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      this.setState({
        booksOnShelves: result,
      });
    });
  }

  /**
    Renders BooksApp into the DOM.
  */
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/search' exact render={() => (
            <SearchPage
              onBookChange={this.handleBookShelfChange}
            />
          )}/>

          <Route path='/' exact render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf
                    shelfName='Currently Reading'
                    books={this.state.booksOnShelves}
                    onBookChange={this.handleBookShelfChange}
                  />
                  <Bookshelf
                    shelfName='Want to Read'
                    books={this.state.booksOnShelves}
                    onBookChange={this.handleBookShelfChange}
                  />
                  <Bookshelf
                    shelfName='Read'
                    books={this.state.booksOnShelves}
                    onBookChange={this.handleBookShelfChange}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
