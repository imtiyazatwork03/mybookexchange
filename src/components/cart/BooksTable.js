import React from 'react'
import { Link } from 'react-router-dom'

function BooksTable() {
    const datas = [
        {
            "id": 1,
            "title": "Applied Physics",
            "price": "₹350.00",
            "discount": "-₹50.00",
            "netpay": "$10"
        },
        {
            "id": 2,
            "title": "Mathematics",
            "price": "₹550.00",
            "discount": "-₹70.00",
            "netpay": "$10"
        },
        {
            "id": 3,
            "title": "Physics",
            "price": "₹750.00",
            "discount": "-₹90.00",
            "netpay": "$10"
        }
    ]
    return (
        <aside className="col-md-9 col-lg-9 ">
            <h6 className="mb-20 bold">Books selected</h6>
            <div className="card-body bg-white box-shadow card mb-50">
                <div className="table-responsive mt-20">
                    <table className="table center-aligned-table">
                        <thead>
                            <tr className="text-dark">
                                <th>Title</th>
                                <th>Price</th>
                                <th>Discount </th>
                                <th> Net pay </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas && datas.length && datas.map(prop => {
                                return (
                                    <tr key={prop.id}>
                                        <td>
                                            {prop.title}
                                        </td>
                                        <td>
                                            {prop.price}
                                        </td>
                                        <td>
                                            {prop.discount}
                                        </td>
                                        <td>
                                            {prop.netpay}
                                        </td>
                                        <td>
                                        <Link className="pr-2" to="/" title="Edit">
                                            <ion-icon name="create-outline"></ion-icon>
                                        </Link>
                                        <Link className="pr-2" to="/" title="Edit">
                                            <ion-icon name="trash-outline"></ion-icon>
                                        </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </aside>
    )
}

export default BooksTable
