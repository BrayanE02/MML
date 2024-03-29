import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../css/Search.css";

import { searchMovies } from '../services/MoviesService';

// import testdata from '../services/json/testMovie.json'

function Search(props) {
    const navigate = useNavigate();

    //set up hooks for the radio buttons and search bar
    const [hookRadio, setHookRadio] = useState("Name");
    const [hookSearch, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        console.log(hookSearch);
    };
    const handleRadioChange = (e) => {
        setHookRadio(e.target.value, 10);
        console.log(hookRadio);
    };
    const handleSearchClick = async (event) => {
        event.preventDefault();
        //log the search term and what to search by
        const searchTerm = hookSearch;
        const searchBy = hookRadio;

        // Testing
        console.log(hookSearch);
        console.log(hookRadio);

        try {
            var res = await searchMovies(searchTerm, searchBy); // Call searchMovies function
            props.updateSearch(res.results); // Update search results in parent component
            console.log(res.results);
            navigate('/SearchResults');
          } catch (error) {
            console.error('Error fetching search results:', error);
            // Display an error message to the user
          }



        /*query the api using the results here
        var res = [testdata, testdata] //this is just test data for now

        //update the search results list with data
        props.updateSearch(res.results);

        //go to the results page
        navigate('/results')
        */
    };

    return (
        <form onSubmit={handleSearchClick} id='searchform'>
            <div className="mb-3 flex-container search-div">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleSearchChange}
                    placeholder='Enter Search Term'
                />
                <div className="dropdown">
                    <button
                        className="btn btn-search dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Search By
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='radiosearch' onChange={handleRadioChange}>
                        <li>
                            <>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="searchBy"
                                    id="flexRadioDefault1"
                                    defaultChecked
                                    value={"Name"}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1" >
                                    Name
                                </label>
                            </>

                        </li>
                        <li>
                        <>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="searchBy"
                                    id="flexRadioDefault1"
                                    value={"Year"}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Year
                                </label>
                            </>
                        </li>
                        <li>
                        <>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="searchBy"
                                    id="flexRadioDefault1"
                                    value={"Genre"}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1" >
                                    Genre
                                </label>
                            </>
                        </li>
                    </ul>
                </div>

                <button type="submit" className="btn btn-search">
                    Search
                </button>
            </div>

        </form>

    )
}

export default Search;