import React from 'react'

const BookCard = () => {
    return (
        <div className="wrapper">
            <section class="wdth100 bg-gry">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 pb-50 pt-50">
                            <div class="chat-section ">
                                <div class="row ">
                                    <aside class="col-md-9 col-lg-9">
                                        <div class="row pb-20">

                                            {/* <!-- heading Start--> */}
                                            <div class="col-md-12 ">
                                                <h4>Welcome: Manjeet Singh
                                                </h4>
                                                <hr class="mt-30 mb-30" />
                                            </div>
                                            {/* <!-- heading End-->

                                            <!-- heading Start--> */}
                                            <div class="col-md-12 ">
                                                <h6>Find Books
                                                </h6> </div>
                                            {/* <!-- heading End--> */}




                                            {/* <!-- list-1 start --> */}
                                            <aside class="col-md-4 item pt-15 pb-15 text-center">
                                                <div class="card ">
                                                    <div class="card-body pb-30">
                                                        {/* <!-- Top section Start--> */}
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <img src="images/seller.png" class="mb-20 mt-20" />
                                                                <h5>Want to List Book</h5>
                                                                <a href="#" class="button">+ List your Book</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </aside>

                                            <aside class="col-md-4 item pt-15 pb-15 text-center">
                                                <div class="card ">
                                                    <div class="card-body pb-30">
                                                        {/* <!-- Top section Start--> */}
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <img src="images/seller.png" class="mb-20 mt-20" />
                                                                <h5>Manage Book Listing</h5>
                                                                <a href="#" class="button"> Manage Books List</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </aside>

                                            <aside class="col-md-4 item pt-15 pb-15 text-center">
                                                <div class="card ">
                                                    <div class="card-body pb-30">
                                                        {/* <!-- Top section Start--> */}
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <img src="images/seller.png" class="mb-20 mt-20" />
                                                                <h5>Edit Membership</h5>
                                                                <a href="#" class="button">Edit Your Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </aside></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookCard