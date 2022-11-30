import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import MyListBooks from '../components/list-books/MyListBooks';
import { getBooks } from '../store/actions/book.action';
import { bookList } from '../store/selectors/book.selector';
import RouteLink from '../components/common/RouteLink';

const MyListingBooks = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Manage Books', active: true, route: '/managebooks' }
    ]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch]);
    const books = useSelector(bookList);
    return (
        <div className="Manage_Book_Listing page-container bg-gry">
            <Header showAddInfo={true} sideProfile={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <RouteLink />
            <MyListBooks books={books} />
            <Footer />
        </div>
    );
}

export default MyListingBooks