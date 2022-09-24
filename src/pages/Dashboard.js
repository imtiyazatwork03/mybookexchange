import React from 'react'
import Search from '../components/home/Search'
import SidebarDash from '../components/list-books/SidebarDash'
import BookCard from '../components/BookCard'
import Footer from '../components/layout/Footer'

const Dashboard = () => {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-50 pt-50">
                        <div className="chat-section ">
                            <div className="row ">
                                {/* <!-- left Chat Section start--> */}
                                <aside className="col-md-3 col-lg-3 pb-50">
                                    <h5 className="bold border-bottom pb-20">Dashboard</h5>
                                    <div className="card-body p-0">
                                        <ul className="gttl">
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Find a Book</a></li>
                                            <li><a href="#">Manage Book Listing</a></li>
                                            <li><a href="#">Edit Membership</a></li>
                                            <li><a href="#">Want to List Book</a></li>
                                            <li><a href="#"> Logout</a></li>
                                        </ul>

                                    </div>
                                </aside>
                                <aside className="col-md-9 col-lg-9">
                                    <div className="row pb-20">

                                        {/* <!-- heading Start--> */}
                                        <div className="col-md-12 ">
                                            <h4>Welcome: Manjeet Singh
                                            </h4>
                                            <hr className="mt-30 mb-30" />
                                        </div>
                                        {/* <!-- heading End--> */}

                                        {/* <!-- heading Start--> */}
                                        <div className="col-md-12 ">
                                            <h6>Find Books
                                            </h6> </div>
                                        {/* <!-- heading End--> */}

                                        <div className="col-md-12 bg-white main-searchbar mb-30 pl-0 pr-0 pb-0">
                                            <div className="pt-10 pr-10 pb-10 pl-10">
                                                <div className="widget lookingfor">
                                                    <input type="search" className="form-control" placeholder="Search..." />
                                                </div>
                                                <div className="widget search-cat">
                                                    <select id="inputState" className="form-control">
                                                        <option selected="">By Author</option>
                                                        <option>By Title</option>
                                                        <option>By ISBN</option>
                                                    </select>
                                                </div>
                                                <div className="widget search-action">
                                                    <button type="submit" className="button">Search</button>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                                

                                        {/* <!-- list-1 start --> */}
                                        
                                        <aside className="col-md-4 item pt-15 pb-15 text-center">
                                            <div className="card ">
                                                <div className="card-body pb-30">
                                                    
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src="images/seller.png" className="mb-20 mt-20" />
                                                            <h5>Want to List Book</h5>
                                                            <a href="#" className="button">+ List your Book</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>

                                        <aside className="col-md-4 item pt-15 pb-15 text-center">
                                            <div className="card ">
                                                <div className="card-body pb-30">
                                                   
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src="images/seller.png" className="mb-20 mt-20" />
                                                            <h5>Manage Book Listing</h5>
                                                            <a href="#" className="button"> Manage Books List</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>

                                        <aside className="col-md-4 item pt-15 pb-15 text-center">
                                            <div className="card ">
                                                <div className="card-body pb-30">
                                                    
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src="images/seller.png" className="mb-20 mt-20" />
                                                            <h5>Edit Membership</h5>
                                                            <a href="#" className="button">Edit Your Profile</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>


                                    </div>
                                        



                                </aside></div>
                               {/* <!-- right Chat Section end--> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Dashboard









