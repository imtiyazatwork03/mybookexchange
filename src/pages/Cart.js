import React from 'react'
import CartTable from '../components/cart/CartTable'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Breadcrumb from '../components/common/Breadcrumb';
import RouteLink from '../components/common/RouteLink';

const Cart = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'My Cart', active: true, route: '/mycart' },
    ]
    return (
        <div className="page-container bg-gry">
            <Header showAddInfo={true} showLogin={false} sideProfile={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <RouteLink />
            <CartTable />
            <Footer />
        </div>
    )
}

export default Cart