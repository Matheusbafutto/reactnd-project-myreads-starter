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


const book = {
  imageLinks: { thumbnail: 'mock' },
  title: 'teste',
  author: 'Matheus'
}
const onBookChange = jest.fn();
global.book = book;
global.onBookChange = onBookChange;

const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn()
};

global.localStorage = localStorageMock;
