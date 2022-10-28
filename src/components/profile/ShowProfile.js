import React from "react";
import BookForm from "../list-books/BookForm";
import SidebarDash from "../list-books/SidebarDash";

function ShowProfile() {
  return (
    <div>
      <div className="wrapper">
        <section className="wdth100 bg-gry">
          <div className="container">
            <div className="row">
              <div className="col-md-12 pb-50 pt-50">
                <div className="chat-section ">
                  <div className="row">
                    <SidebarDash />
                    <ProfileInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ProfileInfo() {
  return (
    <>
      <aside className="col-md-9 col-lg-9">
        <h1>Profile</h1>
      </aside>
    </>
  );
}

export default ShowProfile;
