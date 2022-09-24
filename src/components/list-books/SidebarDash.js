// import React from 'react'

// const SidebarDash = () => {
//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-12 pb-50 pt-50">
//                         <div className="chat-section ">
//                             <div className="row ">
//                                 {/* <!-- left Chat Section start--> */}
//                                 <aside className="col-md-3 col-lg-3 pb-50">
//                                     <h5 className="bold border-bottom pb-20">Dashboard</h5>
//                                     <div className="card-body p-0">
//                                         <ul className="gttl">
//                                             <li><a href="#">Profile</a></li>
//                                             <li><a href="#">Find a Book</a></li>
//                                             <li><a href="#">Manage Book Listing</a></li>
//                                             <li><a href="#">Edit Membership</a></li>
//                                             <li><a href="#">Want to List Book</a></li>
//                                             <li><a href="#"> Logout</a></li>
//                                         </ul>
//                                     </div>
//                                 </aside>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SidebarDash


import React from 'react'

const SidebarDash = () => {
    return (
        <div className=''>
            <section className="wdth100 bg-gry">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-50 pt-50">
                            <div className="chat-section ">
                                <div className="row ">
                                    {/* <!-- left Chat Section start--> */}
                                    <aside className="col-md-3 col-lg-5 pb-50">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SidebarDash