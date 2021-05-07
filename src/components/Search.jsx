import React from 'react';
import './search.css'
import peopleImg from '../Image/people.jpg';
const Search = ({ placeholder, handleChange }) => {
    return (
        <>
        <div>
        <img className='peopleImg' src={peopleImg} />
    </div>
    <h1>People</h1>
        <div className='ui search'>
            <div className='box'>
                <i class="fas fa-search"></i>
                <input type='search'
                    className='search'
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </div>
        </div>
        </>
    );
}
    

export default Search;