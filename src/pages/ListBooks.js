import React from 'react'
import ListBooksSidebar from '../components/list-books/ListBooksSidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Breadcrumb from '../components/common/Breadcrumb';

export const ListBooks = () => {
  const breadcrumbs = [
    { name: 'Dashboard', active: true, route: '/dashboard' },
    { name: 'List Book', active: false, },
  ]
  return (
    <>
      <Header showAddInfo={true} />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <ListBooksSidebar />
      <Footer />
    </>
  )
}
