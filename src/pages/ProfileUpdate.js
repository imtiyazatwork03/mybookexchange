import React from "react";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/layout/Footer";
import ShowProfile from "../components/profile/ShowProfile";

const ProfileUpdate = () => {
  const breadcrumbs = [
    { name: "Dashboard", active: true, route: "/dashboard" },
    { name: "Edit Membership", active: false },
  ];

  return (
    <div className="Manage_Book_Listing">
      <Header showAddInfo={true} />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <ShowProfile />
      <Footer />
    </div>
  );
};

export default ProfileUpdate;
