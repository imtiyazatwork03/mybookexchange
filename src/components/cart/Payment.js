import React from 'react'

function Payment() {
    return (
        <aside className="col-md-3 col-lg-3 ">
            <h6 className="mb-20 bold">Payment</h6>
            <div className="card-body box-shadow card">
                <ul className="gttl">
                    <li>
                        Sub total <span>₹2350.00</span>
                    </li>
                    <li>
                        Discount <span>₹350.00</span>
                    </li>
                    <li>
                        Grand total <span>₹2000.00</span>
                    </li>
                </ul>
                <button
                    type="submit"
                    className="button blue"
                    data-toggle="modal"
                    data-target="#"
                >
                    Pay now
                </button>
            </div>
        </aside>
    )
}

export default Payment
