import * as actionTypes from '../types/book.type';
import { bookList, addBook, removeBook, bookDetail, bookTypes, bookCategories, bookSearch, updateBookDetail } from '../../shared/services/app.services';

export const getBooks = () => dispatch => {
    dispatch({ type: actionTypes.BOOK_LIST, payload: undefined });
    return bookList().then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.BOOK_LIST_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.BOOK_LIST_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};

export const createBook = payload => dispatch => {
    dispatch({ type: actionTypes.ADD_BOOK, payload: undefined });
    return addBook(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.ADD_BOOK_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.ADD_BOOK_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};

export const updateBook = (payload, id) => dispatch => {
    dispatch({ type: actionTypes.UPDATE_BOOK, payload: undefined });
    return updateBookDetail(payload, id).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.UPDATE_BOOK_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.UPDATE_BOOK_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};

export const deleteBook = payload => dispatch => {
    dispatch({ type: actionTypes.DELETE_BOOK, payload: undefined });
    return removeBook(payload).then(response => {
        const { success, data } = response.data;
        if (success) {
            dispatch({ type: actionTypes.DELETE_BOOK_SUCCESS, payload: data.data });
            dispatch(getBooks());
        }
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.DELETE_BOOK_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};

export const getBook = payload => dispatch => {
    dispatch({ type: actionTypes.BOOK_DETAIL, payload: undefined });
    return bookDetail(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.BOOK_DETAIL_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.BOOK_DETAIL_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};

export const getBookTypes = () => dispatch => {
    dispatch({ type: actionTypes.BOOK_TYPES_LIST, payload: undefined });
    return bookTypes().then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.BOOK_TYPES_LIST_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.BOOK_TYPES_LIST_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};

export const getBookCategories = () => dispatch => {
    dispatch({ type: actionTypes.BOOK_CATEGORIES, payload: undefined });
    return bookCategories().then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.BOOK_CATEGORIES_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.BOOK_CATEGORIES_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};

export const searchBook = payload => dispatch => {
    dispatch({ type: actionTypes.BOOK_SEARCH, payload: undefined });
    return bookSearch(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.BOOK_SEARCH_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.BOOK_SEARCH_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};
