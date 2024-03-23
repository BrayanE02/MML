// React imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Css imports
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../components/Card';

//test data
import * as testdata from '../services/json/testMovie.json';

function SearchResults() {
  
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/results')
  };
  
    // State for controlling dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    {/* Search bar and dropdown */}
  <div className="container mt-3">
        <div className="input-group d-flex justify-content-between">
          <input
            type="text"
            className="form-control"
            placeholder="Search for movies..."
            aria-label="Search for movies"
            aria-describedby="search-btn"
          />
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              onClick={handleDropdownClick}
            >
              Search by
            </button>
            <ul
              className={`dropdown-menu dropdown-menu-right ${isDropdownOpen ? 'show' : ''}`}
              aria-labelledby="dropdownMenuButton"
            >
              <li><input type="radio" name="searchCategory" id="name" value="name" /> Name</li>
              <li><input type="radio" name="searchCategory" id="year" value="year" /> Year</li>
              <li><input type="radio" name="searchCategory" id="genre" value="genre" /> Genre</li>
              <li><input type="radio" name="searchCategory" id="director" value="director" /> Director</li>
            </ul>
          </div>
          <button className="btn btn-primary" id="search-btn" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>

{/* Search results header */}
<h1>Search Results</h1>

{/* Displaying test movie data using the Card component */}
    <Card movie={testdata}/>
    </>
  )
};

export default SearchResults;