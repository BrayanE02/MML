// React imports

// Css imports
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../components/Card';
import Search from '../components/Search';

//test data

function SearchResults(params) {
  var results = params.searchResults;
  var movies;
  if (results == undefined) {
    movies = <p>Sorry no results where found, please try to search again.</p>;
  }
  else {
    movies = results.map((movie) => {
      return (
        <Card movie={movie} key={Math.random(1, 1000)} setOneMovieIDFunc={params.setOneMovieIDFunc}></Card>
      )
    });
  }

  return (
    <>
      {/* Search bar and dropdown */}
      <Search updateSearch={params.changeSearch}></Search>

      {/* Search results header */}
      <h1>Search Results</h1>

      {/* Displaying test movie data using the Card component */}
      <div className='container mt-3'>
        <div className='div-cardlist'>
          {movies}
        </div>
      </div>
    </>
  )
}

export default SearchResults;