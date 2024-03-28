import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../css/Search.css"
import arrow from '../assets/dropdown-arrow.png';

function Search(){    
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/results')
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return(    
        <div className="container mt-3">
            <div className="input-group d-flex">
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Search for movies..."
                    aria-label="Search for movies"
                    aria-describedby="search-btn"
                    
                />
                <div className="dropdown">
                    <button
                        className="btndropdown"
                        type="button"
                        onClick={handleDropdownClick}
                    >
                        <img src={arrow} className='arrow'/>
                    </button>
                    <ul
                        className={`dropdown-menu  ${isDropdownOpen ? 'show' : ''}`}
                        aria-labelledby="dropdownMenuButton"
                    >
                        <li><input type="radio" name="searchCategory" id="name" value="name"/> Name</li>
                        <li><input type="radio" name="searchCategory" id="year" value="year" /> Year</li>
                        <li><input type="radio" name="searchCategory" id="genre" value="genre" /> Genre</li>
                        <li><input type="radio" name="searchCategory" id="director" value="director" /> Director</li>
                    </ul>
                </div>
                <button className="searchbtn" id="search-btn" onClick={handleSearchClick}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search;