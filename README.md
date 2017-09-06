# myReads
## Intro
This project my implementation of the Udacity module React Fundamentals final project [myReads](https://github.com/udacity/reactnd-project-myreads-starter). MyReads is a basic webapp for managing your books. You can add books by searching them within your server and place them anywhere among the bookshelves 'Currently Reading', 'Want To Read' and 'Read'.

## Motivation
I am addicted to growth and self improvement. That means I constantly have a big pile of books with varying subjects I would like to read. Managing my reads on these books was a constant pain to me, so I've built a tool that helps manage my book list.

## Stack
 - ReactDOM
 - NodeJs
 - npm packages
    1. [immutability-helper](https://github.com/kolodny/immutability-helper)

## ScreenShots
![Alt text](/src/images/ScreenShot2.png?raw=true "Optional Title")
![Alt text](/src/images/ScreenShot1.png?raw=true "Optional Title")

## Installation
Once cloned, just cd inside the project repo and run the following commands:
```
npm install
npm start
```
After that you should be good to go! In case you are looking for some good documentation, this project has jsdoc compatibility. Check out [jsdoc](https://www.npmjs.com/package/jsdoc) to get to know how to generate the doc page.


## API reference
This project has a backend server to store books and keep bookshelf changes persistent.

### Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

#### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

#### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

#### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

Pull request are always welcome!

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
