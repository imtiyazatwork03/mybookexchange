import React, { useEffect } from 'react';
import ListBooksSidebar from '../components/list-books/ListBooksSidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Breadcrumb from '../components/common/Breadcrumb';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBook, getBookCategories, getBookTypes, resetBook } from '../store/actions/book.action';
import RouteLink from '../components/common/RouteLink';

export const ListBooks = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'List Books', active: true, route: 'listbooks' },
    ]
    useEffect(() => {
        dispatch(getBookTypes());
        dispatch(getBookCategories());
    }, [dispatch]);
    useEffect(() => {
        if (id) dispatch(getBook(id));
        else dispatch(resetBook({}));
    }, [id, dispatch])
    return (
        <>
            <div className='page-container bg-gry'>
                <Header showAddInfo={true} sideProfile={true} />
                <Breadcrumb breadcrumbs={breadcrumbs} />
                <RouteLink />
                <ListBooksSidebar id={id} />
                <Footer />
            </div>
        </>
    )
}
