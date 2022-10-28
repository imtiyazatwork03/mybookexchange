import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/Breadcrumb";
import SideBar from "../components/common/SideBar";
import ListBook from "../components/dashboard/ListBook";
import ManageBook from "../components/dashboard/ManageBook";
import Profile from "../components/dashboard/Profile";
import Search from "../components/home/Search";

const Dashboard = () => {
  const breadcrumbs = [{ name: "Dashboard", active: false }];
  return (
    <div>
      <Header showAddInfo={true} />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="container">
        <div className="row">
          <div className="col-md-12 pb-50 pt-50">
            <div className="chat-section ">
              <div className="row ">
                <SideBar />
                <aside className="col-md-9 col-lg-9">
                  <div className="row pb-20">
                    <div className="col-md-12 ">
                      <h4>Welcome: Manjeet Singh</h4>
                      <hr className="mt-30 mb-30" />
                    </div>
                    <div className="col-md-12 ">
                      <h6>Find Books</h6>
                    </div>
                    <Search />
                    <ListBook />
                    <ManageBook />
                    <Profile />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
