import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import update from 'immutability-helper'

class BooksApp extends React.Component {
  state = {

    booksAvailable: [],
  }

  constructor(props) {
    super(props);
    this.handleBookShelfChange = this.handleBookShelfChange.bind(this);
  }

  handleBookShelfChange(newShelf, book) {

    let updatedBooksAvailable = this.state.booksAvailable.filter( bookAvailable => {
      return bookAvailable.title !== book.title
    });
    let updatedBook = update(book, {
      shelf:{ $set:newShelf }
    })
    // console.log(up);
    updatedBooksAvailable = update(updatedBooksAvailable, { $push:[updatedBook] });

    this.setState({
      booksAvailable: updatedBooksAvailable
    });

    BooksAPI.update(updatedBook, updatedBook.shelf);

  }

  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      console.log(result);
      this.setState({
        booksAvailable: result,
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/search' exact render={() => (
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
                  <input type="text" placeholder="Search by title or author"/>

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
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
                    books={this.state.booksAvailable}
                    onBookChange={this.handleBookShelfChange}
                  />
                  <Bookshelf
                    shelfName='Want to Read'
                    books={this.state.booksAvailable}
                    onBookChange={this.handleBookShelfChange}
                  />
                  <Bookshelf
                    shelfName='Read'
                    books={this.state.booksAvailable}
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
