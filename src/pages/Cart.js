import React from 'react'
import CartTable from '../components/cart/CartTable'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Breadcrumb from '../components/common/Breadcrumb';

const Cart = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/dashboard' },
        { name: 'cart', active: false },
    ]
    return (
        <div className="wrapper">
            <Header showAddInfo={true} showLogin={false} sideProfile={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <CartTable />
            <Footer />
        </div>
    )
}

export default Cart