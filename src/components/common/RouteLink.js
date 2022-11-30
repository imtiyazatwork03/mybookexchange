import React from 'react'
import { Link } from 'react-router-dom'

const RouteLink = () => {
    return (
        <div className="topLink">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-12 mb-10 mt-10">
                        <p className="text-center">
                            <Link to="/">Member Home</Link> | <Link to="/listbooks">List Books</Link> | <Link to="/managebooks">Manage Books</Link> | <Link to="/mycart">My Cart</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteLink