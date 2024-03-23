import * as testdata from '../services/json/testMovie.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Card from '../components/Card';



function Home() {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/results')
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
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
            <Card movie={testdata} />
        </>
    )
}

export default Home;