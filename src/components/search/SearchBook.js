import React from 'react';
import { useSelector } from 'react-redux';
import { searchedBooksSelector } from '../../store/selectors/book.selector';
import Breadcrumb from '../common/Breadcrumb';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import UserTable from '../table/Table';

const SearchBook = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Serach book', active: true, route: '/serach-book' },
    ]
    const data = useSelector(searchedBooksSelector);
    const columns = [
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Author',
            accessor: 'author',
        },
        {
            Header: 'ISBN',
            accessor: 'isbn',
        }
    ];
    return (
        <div className="wrapper">
            <Header showAddInfo={true} showLogin={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <section className="height-100vh wdth1024" style={{ background: '#edf2f5' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-50 pt-50">
                            <div className="chat-section ">
                                <div className="row ">
                                    <UserTable columns={columns} data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SearchBook;
