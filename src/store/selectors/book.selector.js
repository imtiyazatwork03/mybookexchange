import { createSelector } from 'reselect';

const books = state => state.book.books;
const book = state => state.book.book;
const types = state => state.book.types;
const categories = state => state.book.categories;
const searchedBooks = state => state.book.searchedBooks;

export const bookList = createSelector(books, list => list || []);
export const bookDetail = createSelector(book, prop => prop);
export const bookTypeList = createSelector(types, list => list || []);
export const BookCategories = createSelector(categories, list => list || []);
export const searchedBooksSelector = createSelector(searchedBooks, list => list || []);
export const BookSelectedCategories = createSelector([types, categories], (typesProp, categoriesProp) => {
    let typesData = JSON.parse(JSON.stringify(typesProp || []));
    if (typesData?.length && categoriesProp?.length) {
        typesData.forEach(prop => {
            const categoriesData = categoriesProp.filter(cat => cat.type_id === prop.id);
            prop['categories'] = categoriesData;
        });
    }
    return typesData;
});