import React from 'react'

const Search = () => {
    return (
        <div className="col-md-12 bg-white main-searchbar mt-30 mb-30">
            <div className="pt-10 pr-10 pb-10 pl-10">
                <div className="widget lookingfor">
                    <input type="search" className="form-control" placeholder="Search..." />
                </div>
                <div className="widget search-cat">
                    <select id="inputState" className="form-control">
                        <option>By Author</option>
                        <option>By Title</option>
                        <option>By ISBN</option>
                    </select>
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