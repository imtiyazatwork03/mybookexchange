import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Breadcrumb from '../components/common/Breadcrumb';
import MyListBooks from '../components/list-books/MyListBooks';

const MyListingBooks = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/dashboard' },
        { name: 'List Books', active: false, },
    ]
    return (
        <>
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <MyListBooks />
            <Footer />
        </>
    )
}

export default MyListingBooks