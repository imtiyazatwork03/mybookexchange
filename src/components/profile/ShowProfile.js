import React, { useEffect, useState } from "react";
import { onKeyPress } from '../../utils/util';
import Select from 'react-select';
import SidebarDash from "../list-books/SidebarDash";
import { useDispatch, useSelector } from "react-redux";
import { stateList } from "../../store/selectors/auth.selector";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../store/actions/auth.action";
import { toast } from "react-toastify";

function ShowProfile({ profile }) {
    return (
        <div>
           <section className="wdth100 pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pb-50 pt-50">
                                <div className="chat-section ">
                                    <div className="row">
                                        <SidebarDash />
                                        <ProfileInfo profile={profile} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}

const ProfileInfo = ({ profile }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const options = useSelector(stateList);
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
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
        address1: '',
        address2: '',
        city: '',
        state: options[0]?.id,
        zip: ''
    })
    const [selectedOption, setSelectedOption] = useState(null);
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
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const stateChange = (state) => {
        setSelectedOption(state)
        setInput(prev => ({
            ...prev,
            state: state.id
        }));
    }
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
                default:
                    break;
            }
            return stateObj;
        });
    }
    useEffect(() => {
        if (profile) {
            const { firstName, lastName, email, username, address1, address2, city, state, zip } = profile;
            const obj = Object.assign({}, {
                firstName,
                lastName,
                email,
                username,
                address1,
                address2,
                city,
                state: state?.id,
                zip
            });
            setSelectedOption(state);
            setInput({ ...input, ...obj });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile]);

    const formSubmit = async (event) => {
        event.preventDefault();
        const user = await dispatch(updateProfile(input));
        const { success, reason } = user;
        if (success) {
            toast.success(reason);
            navigate('/dashboard')
        } else toast.error(reason);
    }

    return (
        <aside className="col-md-9 col-lg-9">
            <div className="row pb-20">
                <div className="col-md-12 ">
                </div>
                <div className="col-md-12 card pt-40 pb-30 pl-20 pr-20 clearfix text-center">
                    {/* <div className="text-center">
                        <img src="/images/register-member.png" alt="member" className="mb-20" style={{width: '109px',  height: '109px'}}/>
                    </div> */}
                    <h4>Member Update</h4>
                    <hr className="mt-20 mb-10" />
                    <div className="card-body">
                        <form className="text-left" onSubmit={formSubmit}>
                            <div className="form-row mt-20 mb-20">
                                <div className=" col-md-6">
                                    <label htmlFor="firstName">First name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        value={input?.firstName || ''}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        placeholder="First name"
                                        required />
                                    {error.firstName && <span className='err'>{error.firstName}</span>}
                                </div>
                                <div className=" col-md-6">
                                    <label htmlFor="lastName">Last name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        value={input?.lastName || ''}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        placeholder="Last name"
                                        required />
                                    {error.lastName && <span className='err'>{error.lastName}</span>}
                                </div>
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={input?.email || ''}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        id="email"
                                        placeholder="Email"
                                        required />
                                    {error.email && <span className='err'>{error.email}</span>}
                                </div>
                                <div className=" col-md-6">
                                    <label htmlFor="username">Username *</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        value={input?.username || ''}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        placeholder="Username"
                                        required />
                                    {error.username && <span className='err'>{error.username}</span>}
                                </div>
                            </div>
                            <div className="form-group  mt-20 mb-20">
                                <label htmlFor="address1">Address 1</label>
                                <input
                                    type="text"
                                    name="address1"
                                    className="form-control"
                                    value={input?.address1 || ''}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                    id="address1"
                                    placeholder="Address 1" />
                            </div>
                            <div className="form-group mt-20 mb-20">
                                <label htmlFor="address2">Address 2</label>
                                <input
                                    type="text"
                                    name="address2"
                                    className="form-control"
                                    value={input?.address2 || ''}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                    id="address2"
                                    placeholder="Address 2" />
                            </div>
                            <div className="form-row mt-20 mb-20">
                                <div className="form-group col-md-6">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="form-control"
                                        value={input?.city || ''}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
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
                                        placeholder="select"
                                        onChange={stateChange}
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
                                        onKeyPress={(event) => onKeyPress(event)}
                                        className="form-control"
                                        value={input?.zip || ''}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                        id="zip"
                                        placeholder='Zip' />
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
