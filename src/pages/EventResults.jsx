import PropTypes from 'prop-types';
import { useState } from 'react';
import ResultList from '/src/components/InfoDisplay/ResultList.jsx';

const API_KEY = 'T0BVS5icJGtLXtTAG8E8lLGVXrS9Fxvr';

export function SearchInput({ onSearch, onFilter }) {
    const [inputValue, setInputValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            onSearch(inputValue);
        } else if (filterValue.trim() !== '') {
            onFilter(filterValue);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchInput" className="sr-only"></label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    placeholder="Search..."
                />
                <label htmlFor="filterInput" className="sr-only"></label>
                <input
                    type="text"
                    value={filterValue}
                    onChange={event => setFilterValue(event.target.value)}
                    placeholder="Filter..."
                />
                <button type="submit" className='text-fuchsia-800 pl-10 pt-5 text-3xl font-semibold tracking-tight leading-[72px] max-md:pl-5 max-md:pt-5 max-md:max-w-full max-md:text-2xl' aria-label='For search or filter'>Search/Filter</button>
            </form>
        </div>
    );
}

function EventResults() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTerm, setFilterTerm] = useState('');

    const handleSearch = (term) => {
        console.log(term);
        setSearchTerm(term);
    };

    const handleFilter = (term) => {
        console.log(term);
        setFilterTerm(term);
    };

    return (
        <div>
            <SearchInput onSearch={handleSearch} onFilter={handleFilter} />
            <ResultList apiKey={API_KEY} searchTerm={searchTerm} filterTerm={filterTerm} />
        </div>
    )
}

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
};

export default EventResults;
