import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SideBar from "../components/common/SideBar";
// import ListBook from "../components/dashboard/ListBook";
// import ManageBook from "../components/dashboard/ManageBook";
// import Profile from "../components/dashboard/Profile";
import Search from "../components/home/Search";
import Breadcrumb from "../components/common/Breadcrumb";
import UserTable from "../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import { searchedBooksSelector } from "../store/selectors/book.selector";
import { resetSearchBook } from "../store/actions/book.action";

const Dashboard = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/dashboard' },
    ]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetSearchBook())
    }, [dispatch]);
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
        },
        {
            Header: 'Actions',
            accessor: 'actions',
        }
    ];
    return (
        <>
        <div className="page-container bg-gry">
            <Header showAddInfo={true} sideProfile={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
             <section className="wdth100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pb-50 pt-50">
                                <div className="chat-section ">
                                    <div className="row ">
                                        <SideBar />
                                        <aside className="col-md-9 col-lg-9">
                                            <div className="row pb-20">
                                                {/* <div className="col-md-12 ">
                                                    <h4>Welcome: {profile?.name}</h4>
                                                    <hr className="mt-30 mb-30" />
                                                </div> */}
                                                {/* <div className="col-md-12 ">
                                                    <h6>Find Books</h6>
                                                </div> */}
                                                <Search />
                                                {
                                                    data && data.length ? <UserTable columns={columns} data={data} /> : null
                                                }
                                                {/* <ListBook />
                                                <ManageBook />
                                                <Profile /> */}
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            <Footer />
            </div>
        </>
    );
};

export default Dashboard;
