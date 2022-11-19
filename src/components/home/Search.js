import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { searchBook } from '../../store/actions/book.action';
import { searchedBooksSelector } from '../../store/selectors/book.selector';

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inputElement = useRef('');
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { id: 'author', name: 'By Author' },
        { id: 'title', name: 'By Title' },
        { id: 'isbn', name: 'By ISBN' }
    ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'black',
            padding: 10
        }),
        control: () => ({
            display: 'flex',
            height: '48px'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }
    const token = localStorage.getItem('token');
    const data = useSelector(searchedBooksSelector);
    const serach = async() => {
        const option = selectedOption?.id || options[0]?.id;
        const text = inputElement.current.value.toLowerCase();
        const obj = { [option]: text };
        await dispatch(searchBook(obj));
        if (!token && data && data.length) navigate('/search-book');
    }
    return (
        <div className="col-md-12 bg-white main-searchbar mb-30">
            <div className="pt-10 pr-10 pb-10 pl-10">
                <div className="widget lookingfor">
                    <input type="search" className="form-control" ref={inputElement} placeholder="Search..." />
                </div>
                <div className="widget search-cat">
                    <Select
                        styles={customStyles}
                        value={selectedOption || options[0]}
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
                <div className="widget search-action">
                    <button type="button" className="button" onClick={serach}>Search</button>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Search;