import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="wrapper">
            <section className="height-100vh d-flex align-items-center page-section-ptb error-page" >
                <div className="container">
                    <img src="images/error-img.png" alt="not-found" />
                    <h1>404</h1>
                    <h2>error</h2>
                    <p className='mt-5'>
                        This typically means that the request you made cannot be found. Please check and retry the request again, or you may return to the <Link to="/" style={{color: 'blue'}}>mybookexchange.com</Link> home page to start again. Thanks.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default NotFound;