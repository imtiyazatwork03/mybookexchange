import { createSelector } from 'reselect';

const books = state => state.book.books;
const book = state => state.book.book;
const types = state => state.book.types;
const categories = state => state.book.categories;

export const bookList = createSelector(books, list => list || []);
export const bookDetail = createSelector(book, prop => prop);
export const bookTypeList = createSelector(types, list => list || []);
export const BookCategories = createSelector(categories, list => list || []);