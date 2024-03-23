// React imports
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Css imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//test data
import * as testdata from './services/json/testMovie.json';

//Our component imports
import OneMoviePage from './pages/OneMoviePage';
import Card from './components/Card';
import Nav from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchResults from './pages/SearchResults';


function App() {

  // eslint-disable-next-line no-unused-vars
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
      {/* Nav bar  */}
      <Nav/>
      {/* these two are needed for routing */}
      
      <Routes>
        {/* Each route will be its own component under the element tage */}
        <Route exact path='/' element={
          // This is just an example of one card, whoever does the home page can remove this and put it in their page. 
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
          <Card movie={testdata}/>
          </>
        }/>
        <Route exact path='/login' element={
          <Login/> 
        }/>
        <Route exact path='/register' element={
          <Register/> 
        }/>
        <Route exact path='/MyList' element={
          <p>My List</p> 
        }/>
        <Route exact path='/results' element={
          <SearchResults/>
        }/>
        <Route exact path='/OneMoviePage' element={
          <OneMoviePage/>
        }/>

      </Routes>
      

        {/* Footer bar will go here: */}
    
    </> 
    
  )
}

export default App
