import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { onKeyPress } from '../../utils/util';
import Select from 'react-select';

function RegistrationForm() {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { id: 'alb', name: 'Alabama' },
        { id: 'als', name: 'Alaska' }
    ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'black',
            padding: 10,
        }),
        control: () => ({
            background: '#f6f7f8',
            display: 'flex',
            height: '48px'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }
    return (
        <section className="pt-50 pb-50 d-flex align-items-center page-section-ptb forget-screen" >
            <div className="container">
                <div className="row justify-content-center no-gutters vertical-align">
                    <div className="col-lg-8 col-md-6 bg-white">
                        <div className="pt-30 pr-30 pb-30 pl-30 clearfix text-center">
                            <img src="/images/register-member.png" alt="member" className="mb-20" />
                            <h4>Member Registration</h4>
                            <form className="text-left">
                                <div className="form-row mt-20 mb-20">
                                    <div className=" col-md-6">
                                        <label htmlFor="firstName">First name</label>
                                        <input type="text" name="firstName" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className=" col-md-6">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" name="lastName" className="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="form-row mt-20 mb-20">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" />
                                    </div>
                                    <div className=" col-md-6">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" className="form-control" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="form-row mt-20 mb-20">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="cpassword">Confirm password</label>
                                        <input type="password" name="cpassword" className="form-control" id="cpassword" placeholder="Confirm password" />
                                    </div>
                                </div>
                                <div className="form-group  mt-20 mb-20">
                                    <label htmlFor="address1">Address 1</label>
                                    <input type="text" name="address1" className="form-control" id="address1" placeholder="Address 1" />
                                </div>
                                <div className="form-group mt-20 mb-20">
                                    <label htmlFor="address2">Address 2</label>
                                    <input type="text" name="address2" className="form-control" id="address2" placeholder="Address 2" />
                                </div>
                                <div className="form-row mt-20 mb-20">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="city">City</label>
                                        <input type="text" name="city" className="form-control" id="city" placeholder='City' />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="state">State</label>
                                        <Select
                                            styles={customStyles}
                                            defaultValue={selectedOption || options[0]}
                                            options={options}
                                            isSearchable={true}
                                            placeholder="select"
                                            onChange={setSelectedOption}
                                            getOptionLabel={option => option.name}
                                            getOptionValue={option => option.id}
                                            theme={(theme) => ({
                                                ...theme,
                                                borderRadius: 0,
                                                colors: {
                                                    ...theme.colors,
                                                    primary: 'black',
                                                },
                                            })}
                                        />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" name="zip" onKeyPress={(event) => onKeyPress(event)} className="form-control" id="zip" placeholder='Zip' />
                                    </div>
                                </div>
                                <button type="submit" className="button">Sign in</button>
                            </form>
                            <p className="mt-20 mb-0 dnthvAcnt">
                                Already have an account? <Link to="/login"><b>Login</b></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegistrationForm