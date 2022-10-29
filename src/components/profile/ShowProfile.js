import React, { useState } from "react";
import { onKeyPress } from '../../utils/util';
import Select from 'react-select';
import SidebarDash from "../list-books/SidebarDash";

function ShowProfile() {
    return (
        <div>
            <div className="wrapper">
                <section className="wdth100 bg-gry">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pb-50 pt-50">
                                <div className="chat-section ">
                                    <div className="row">
                                        <SidebarDash />
                                        <ProfileInfo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function ProfileInfo() {
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
        <aside className="col-md-9 col-lg-9">
            <div className="row pb-20">
                <div className="col-md-12 ">
                </div>
                <div className="col-md-12 card pt-40 pb-30 pl-20 pr-20 clearfix text-center">
                    <div className="text-center">
                        <img src="/images/register-member.png" alt="member" className="mb-20" style={{width: '109px',  height: '109px'}}/>
                    </div>
                    <h4>Member Update</h4>
                    <hr className="mt-20 mb-10" />
                    <div className="card-body">
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
                            <button type="submit" className="button">Upadte</button>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default ShowProfile;
