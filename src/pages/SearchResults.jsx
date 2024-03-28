// React imports

// Css imports
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../components/Card';
import Search from '../components/Search';

//test data
import * as testdata from '../services/json/testMovie.json';

function SearchResults() {

  return (
    <>
{/* Search bar and dropdown */}
    <Search></Search>

{/* Search results header */}
<h1>Search Results</h1>

{/* Displaying test movie data using the Card component */}
    <Card movie={testdata}/>
    </>
  )
}

export default SearchResults;