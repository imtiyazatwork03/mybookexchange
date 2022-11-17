import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SideBar from "../components/common/SideBar";
// import ListBook from "../components/dashboard/ListBook";
// import ManageBook from "../components/dashboard/ManageBook";
// import Profile from "../components/dashboard/Profile";
import Search from "../components/home/Search";
import Breadcrumb from "../components/common/Breadcrumb";
import UserTable from "../components/table/Table";

const Dashboard = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/dashboard' },
    ]
    const data = [
        {
            email: 'ahmadimtiyazj@gmail.com',
            lastLogin: 'Today',
            status: 'Active'
        },
        {
            email: 'ahmadimtiyazj@gmail.com',
            lastLogin: 'Today',
            status: 'Active'
        },
        {
            email: 'ahmadimtiyazj@gmail.com',
            lastLogin: 'Today',
            status: 'Active'
        },
        {
            email: 'ahmadimtiyazj@gmail.com',
            lastLogin: 'Today',
            status: 'Active'
        },
        {
            email: 'ahmadimtiyazj@gmail.com',
            lastLogin: 'Today',
            status: 'Active'
        },
        {
            email: 'ahmadimtiyazj@gmail.com',
            lastLogin: 'Today',
            status: 'Active'
        }
    ];
    const columns = [
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Last Login',
    
            accessor: 'lastLogin',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Actions',
            accessor: 'actions',
        },
    ];
    return (
        <>
            <Header showAddInfo={true} sideProfile={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className="wrapper">
                <section className="wdth100 bg-gry height-100vh">
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
                                                <UserTable columns={columns} data={data} />
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
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
