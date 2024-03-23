// Css imports
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../components/Card';

//test data
import * as testdata from '../services/json/testMovie.json';

const SearchResults = () => {
  return (
    <Card movie={testdata}/>
  )
};

export default SearchResults;