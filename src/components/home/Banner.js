import React from 'react'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="topHdr">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-12 mb-10 mt-10">
                        <p className="text-center">List books, request books for $1 per book, $2 transaction fee (+shipping) | <b style={{ color: '#ffc01b' }}>Save $100s, even $1000s!</b> | <Link to="/"
                            style={{ color: '#fff', fontWeight: '600' }}>Join now</Link> and get immediate access!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
