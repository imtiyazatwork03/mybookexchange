import React from 'react'

function Payment() {
    return (
        <aside className="col-md-3 col-lg-3 ">
            <h6 className="mb-20 bold">Payment</h6>
            <div className="card-body box-shadow card bg-lgtblue">
                <ul className="gttl">
                    <li>
                        Sub Total <span>₹2350.00</span>
                    </li>
                    <li>
                        Discount <span>₹350.00</span>
                    </li>
                    <li>
                        Grand Total <span>₹2000.00</span>
                    </li>
                </ul>
                <button
                    type="submit"
                    className="button blue"
                    data-toggle="modal"
                    data-target="#"
                >
                    Pay Now
                </button>
            </div>
        </aside>
    )
}

export default Payment
