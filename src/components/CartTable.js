
import React from 'react'
import CartTabledata from './CartTableData'
// import Footer from './layout/Footer'
// import Breadcrumb from './common/Breadcrumb'

const CartTable = () => {
    return (
        <div>

            <section class="wdth1024">

                <div class=" bg-blue">
                    <div class="container">
                        <ol class="breadcrumb pb-20 pt-20" style={{ backgroundColor: '#0f65b1' }}>
                            <li class="breadcrumb-item"><a href="dashboard.html" class="default-color">Dashboard</a></li>
                            <li class="breadcrumb-item active">Cart</li>
                        </ol>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 pb-50 pt-50">
                            <div class="chat-section ">
                                <div class="row ">
                                    {/* <!-- left Chat Section start--> */}
                                    <aside class="col-md-9 col-lg-9 ">
                                        <h6 class="mb-20 bold">Books Selected</h6>
                                        <div class="card-body bg-white box-shadow card mb-50">
                                            <div class="table-responsive mt-20">
                                                <table class="table center-aligned-table">
                                                    <thead>
                                                        <tr class="text-dark">

                                                            <th>Title</th>
                                                            <th>Price</th>
                                                            <th>Discount </th>
                                                            <th> Net Pay </th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            
                                                            <td>{CartTabledata.map((index)=>index.title)}</td>
                                                            <td>{CartTabledata.map((index)=>index.price)}</td>
                                                            <td>{CartTabledata.map((index)=>index.discount)}</td>
                                                            <td>{CartTabledata.map((index)=>index.netpay)}</td>
                                                            <td><a class="pr-2" href="#"> <i class="fa fa-eye"></i></a> <a href="#"> <i class="fa fa-trash-o text-danger"></i></a></td>
                                                                                                        
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </aside>
                                    {/* <!-- left Chat Section end-->
                                <!-- right Chat Section start--> */}
                                    <aside class="col-md-3 col-lg-3 ">
                                        <h6 class="mb-20 bold">Payment</h6>
                                        <div class="card-body box-shadow card bg-lgtblue">


                                            <ul class="gttl">
                                                <li>Sub Total <span>₹2350.00</span></li>
                                                <li>Discount <span>₹350.00</span></li>
                                                <li>Grand Total <span>₹2000.00</span></li>
                                            </ul>

                                            <button type="submit" class="button blue" data-toggle="modal" data-target="#">Pay Now
                                            </button>
                                        </div>
                                    </aside>
                                </div>

                                {/* <!-- right Chat Section end--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

    )
}

export default CartTable