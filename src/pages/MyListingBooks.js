import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import MyListBooks from '../components/list-books/MyListBooks';
import { getBooks } from '../store/actions/book.action';
import { bookList } from '../store/selectors/book.selector';

const MyListingBooks = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Book Listing', active: true, route: '/my-listing-books' }
    ]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch]);
    const books = useSelector(bookList);
    return (
        <div className="Manage_Book_Listing">
            <Header showAddInfo={true} sideProfile={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <MyListBooks books={books} />
            <Footer />
        </div>
    );
}

export default MyListingBooks