import React from "react";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/layout/Footer";
import ShowProfile from "../components/profile/ShowProfile";
import { useSelector } from "react-redux";
import { userProfile } from "../store/selectors/auth.selector";

const ProfileUpdate = () => {
    const breadcrumbs = [
        { name: "Dashboard", active: true, route: "/" },
        { name: "Edit Membership", active: false },
    ];
    const profile = useSelector(userProfile);
    return (
        <div className="Manage_Book_Listing">
            <Header showAddInfo={true} sideProfile={true}/>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <ShowProfile profile={profile} />
            <Footer />
        </div>
    );
};

export default ProfileUpdate;
