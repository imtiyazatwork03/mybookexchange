import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
// import { onKeyPress } from '../../utils/util';
import { signUp } from '../../store/actions/auth.action';
// import Select from 'react-select';
import './profile.css';
import { stateList } from '../../store/selectors/auth.selector';

const RegistrationForm = () => {
    // const [selectedOption, setSelectedOption] = useState(null);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const options = useSelector(stateList);
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        address1: '',
        address2: '',
        city: '',
        state: options[0]?.id,
        zip: ''
    });
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        address1: '',
        address2: '',
        city: '',
        state: options[0]?.id,
        zip: ''
    })
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    // const stateChange = (state) => {
    //     setSelectedOption(state)
    //     setInput(prev => ({
    //         ...prev,
    //         state: state.id
    //     }));
    // }

    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };
            switch (name) {
                case "firstName":
                    if (!value) stateObj[name] = "Please enter first name.";
                    break;
                case "lastName":
                    if (!value) stateObj[name] = "Please enter last name.";
                    break;
                case "email":
                    if (!value) stateObj[name] = "Please enter email.";
                    break;
                case "username":
                    if (!value) stateObj[name] = "Please enter username.";
                    break;
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;
                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;
                default:
                    break;
            }
            return stateObj;
        });
    }
    // const customStyles = {
    //     option: (provided, state) => ({
    //         ...provided,
    //         color: state.isSelected ? 'white' : 'black',
    //         padding: 10,
    //     }),
    //     control: () => ({
    //         background: '#f6f7f8',
    //         display: 'flex',
    //         height: '48px'
    //     }),
    //     singleValue: (provided, state) => {
    //         const opacity = state.isDisabled ? 0.5 : 1;
    //         const transition = 'opacity 300ms';
    //         return { ...provided, opacity, transition };
    //     }
    // }
    const formSubmit = async (event) => {
        event.preventDefault();
        const user = await dispatch(signUp(input));
        const { success, reason } = user;
        if (success) {
            toast.success(reason);
            navigate('/login')
        } else toast.error(reason);
    }
    return (
        <section className="pt-50 pb-50 d-flex align-items-center page-section-ptb forget-screen" >
            <div className="container">
                <div className="row justify-content-center no-gutters vertical-align">
                    <div className="col-lg-8 col-md-6 bg-white">
                        <div className="pt-30 pr-30 pb-30 pl-30 clearfix text-center">
                            {/* <img src="/images/register-member.png" alt="member" className="mb-20" /> */}
                            <h4>Member Registration</h4>
                            <hr className="mt-20 mb-10" />
                            <form className="text-left" onSubmit={formSubmit}>
                                <div className="form-row mt-20 mb-20">
                                    <div className=" col-md-6">
                                        {/* <label htmlFor="firstName">First name *</label> */}
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={input?.firstName}
                                            onChange={onInputChange}
                                            onBlur={validateInput}
                                            className="form-control"
                                            placeholder="First name"
                                            required />
                                        {error.firstName && <span className='err'>{error.firstName}</span>}
                                    </div>
                                    <div className=" col-md-6">
                                        {/* <label htmlFor="lastName">Last name *</label> */}
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={input?.lastName}
                                            onChange={onInputChange}
                                            onBlur={validateInput}
                                            className="form-control"
                                            placeholder="Last name"
                                            required />
                                        {error.lastName && <span className='err'>{error.lastName}</span>}
                                    </div>
                                </div>
                                <div className="form-row mt-20 mb-20">
                                    <div className="form-group col-md-6">
                                        {/* <label htmlFor="email">Email *</label> */}
                                        <input
                                            type="email"
                                            name="email"
                                            value={input?.email}
                                            onChange={onInputChange}
                                            onBlur={validateInput}
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            required />
                                        {error.email && <span className='err'>{error.email}</span>}
                                    </div>
                                    <div className=" col-md-6">
                                        {/* <label htmlFor="username">Username *</label> */}
                                        <input
                                            type="text"
                                            name="username"
                                            value={input?.username}
                                            onChange={onInputChange}
                                            onBlur={validateInput}
                                            className="form-control"
                                            placeholder="Username"
                                            required />
                                        {error.username && <span className='err'>{error.username}</span>}
                                    </div>
                                </div>
                                <div className="form-row mt-20 mb-20">
                                    <div className="form-group col-md-6">
                                        {/* <label htmlFor="password">Password *</label> */}
                                        <input
                                            type="password"
                                            name="password"
                                            value={input?.password}
                                            onChange={onInputChange}
                                            onBlur={validateInput}
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            required />
                                        {error.password && <span className='err'>{error.password}</span>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        {/* <label htmlFor="confirmPassword">Confirm password *</label> */}
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={input?.confirmPassword}
                                            onChange={onInputChange}
                                            onBlur={validateInput}
                                            className="form-control"
                                            id="confirmPassword"
                                            placeholder="Confirm password"
                                            required />
                                        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                                    </div>
                                </div>
                                {/* <div className="form-group  mt-20 mb-20">
                                    <label htmlFor="address1">Address 1</label>
                                    <input
                                        type="text"
                                        name="address1"
                                        value={input?.address1}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        className="form-control"
                                        id="address1"
                                        placeholder="Address 1" />
                                </div>
                                <div className="form-group mt-20 mb-20">
                                    <label htmlFor="address2">Address 2</label>
                                    <input
                                        type="text"
                                        name="address2"
                                        value={input?.address2}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        className="form-control"
                                        id="address2"
                                        placeholder="Address 2" />
                                </div>
                                <div className="form-row mt-20 mb-20">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={input?.city}
                                            onChange={onInputChange}
                                            onBlur={validateInput}
                                            className="form-control"
                                            id="city"
                                            placeholder='City' />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="state">State</label>
                                        <Select
                                            styles={customStyles}
                                            value={selectedOption || options[0]}
                                            options={options}
                                            isSearchable={true}
                                            name="state"
                                            onChange={stateChange}
                                            placeholder="select"
                                            getOptionLabel={option => option.state_name}
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
                                        <input
                                            type="text"
                                            name="zip"
                                            value={input?.zip}
                                            onChange={onInputChange}
                                            onBlur={validateInput}
                                            onKeyPress={(event) => onKeyPress(event)}
                                            className="form-control"
                                            id="zip"
                                            placeholder='Zip' />
                                    </div>
                                </div> */}
                                <button type="submit" className="button">Sign up</button>
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

export default RegistrationForm;