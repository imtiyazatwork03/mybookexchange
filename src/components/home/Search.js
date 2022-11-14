import React, { useState } from 'react';
import Select from 'react-select';

const Search = () => {
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
    return (
        <div className="col-md-12 bg-white main-searchbar mb-30">
            <div className="pt-10 pr-10 pb-10 pl-10">
                <div className="widget lookingfor">
                    <input type="search" className="form-control" placeholder="Search..." />
                </div>
                <div className="widget search-cat">
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
                <div className="widget search-action">
                    <button type="submit" className="button">Search</button>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Search;