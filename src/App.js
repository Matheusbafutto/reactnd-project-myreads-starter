import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import update from 'immutability-helper'
import Bookshelf from './components/Bookshelf'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component {
  state = {

    booksAvailable: [],
  }

  constructor(props) {
    super(props);
    this.handleBookShelfChange = this.handleBookShelfChange.bind(this);
  }

  removeBookFromArray(book, array) {
    return array.filter( bookAvailable => {
      return bookAvailable.title !== book.title
    });
  }

  handleBookShelfChange(newShelf, book) {

    let updatedBooksAvailable = this.removeBookFromArray(book, this.state.booksAvailable);

    let updatedBook = update(book, {
      shelf:{ $set:newShelf }
    })

    if ( newShelf !== 'None' ) {
      updatedBooksAvailable = update(updatedBooksAvailable, { $push:[updatedBook] });
    }

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
            <SearchPage/>
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
