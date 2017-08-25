import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

class Bookshelf extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
    this.matchBookToShelf = this.matchBookToShelf.bind(this);
  }


  matchBookToShelf(book) {
    let shelfName = this.props.shelfName.replaceAll(' ', '');
    return book.shelf.toUpperCase() === shelfName.toUpperCase();
  }

  renderBook = (book, i) => {
    return(
      <Book
        key={i}
        title={book.title}
        previewLink={book.previewLink}
        author={book.author}
      />
    )
  }

  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      result = result.filter(this.matchBookToShelf);
      this.setState({
        books: result,
      });
    });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            <li>
            { this.state.books.map(this.renderBook) }
            </li>
            <li>
              <Book
                title='To Kill a Mockingbird'
                url='http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'
                author='Harper Lee'
              />
            </li>
            <li>
              <Book
              title='Enders Game'
              url='http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
              author='Orson Scott Card'
              />
            </li>
          </ol>
        </div>
      </div>
    );
  }

}

export default Bookshelf;
