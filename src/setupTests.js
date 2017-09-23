import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
global.toJson = toJson;
global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = message => {
       throw new Error(message);
};

//Custom components useful mock atributes
const book = {
  imageLinks: { thumbnail: 'mock' },
  title: 'teste',
  author: 'Matheus',
}
const books = [
  {
    imageLinks: { thumbnail: 'mock' },
    title: 'teste1',
    author: 'Matheus',
    shelf: 'read',
  },
  {
    imageLinks: { thumbnail: 'mock' },
    title: 'teste2',
    author: 'splash',
    shelf: 'currentlyReading',
  },
  {
    imageLinks: { thumbnail: 'mock' },
    title: 'teste3',
    author: 'forca',
    shelf: 'wantToRead',
  },
];
const onBookChange = jest.fn();
global.books = books;
global.book = book;
global.onBookChange = onBookChange;

const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn()
};

global.localStorage = localStorageMock;
