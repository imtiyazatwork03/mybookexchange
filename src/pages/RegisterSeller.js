import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';

function RegisterSeller() {
    return (
        <div className="wrapper">
            <Header showAddInfo={true} />
            <section className="pt-50 pb-50 d-flex align-items-center page-section-ptb forget-screen" >
                <div className="container">
                    <div className="row justify-content-center no-gutters vertical-align">
                        <div className="col-lg-8 col-md-6 bg-white">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix text-center">
                                <img src="images/register-member.png" alt="member" className="mb-20" />
                                <h4>Member Registration</h4>
                                <form className="text-left">
                                    <div className="form-row mt-20 mb-20">
                                        <div className=" col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>
                                        <div className=" col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="form-row mt-20 mb-20">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group  mt-20 mb-20">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="form-group mt-20 mb-20">
                                        <label htmlFor="inputAddress2">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="form-row mt-20 mb-20">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">State</label>
                                            <select id="inputState" className="form-control">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" />
                                        </div>
                                    </div>
                                    <div className="form-group mt-20 mb-20">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="button">Sign in</button>
                                </form>
                                <p className="mt-20 mb-0 dnthvAcnt">
                                    Already have an account? <Link to="/"><b>Login</b></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default RegisterSeller;
