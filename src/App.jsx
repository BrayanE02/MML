// React imports
import { Route, Routes } from 'react-router-dom';

// Css imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//data
import * as APIService from './services/MoviesService'

//Our component imports
import OneMovie from './pages/OneMovie';
import AddToList from "./pages/AddToList";
import Nav from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import MyList from './pages/MyList';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';



function App() {
  //define our hooks here
  //cookies
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  //home page hooks
  const [topMoviesList, setTopMovieList] = useState([]);
  const [comedyMoviesList, setComedyMoviesList] = useState([]);
  const [newMoviesList, setNewMoviesList] = useState([]);
  const [backdrops, setBackDrops] = useState([]);

  //Search page hooks
  const [searchResults, setSearchResults] = useState([]);

  //OnePage hooks
  const [oneMovie, setOneMovie] = useState(false);

  //this calls the function when the page it loaded
  useEffect(() =>{
    loadLists();
  }, []);

  //loads the currently selected moive
  const loadOneMovie = async (movie) =>{
    setOneMovie(movie);
  }
  //This gets all three list needed for the home page
  const loadLists = async () => {
    //call the API
    const topComedy = await APIService.getTopComedyMovies();

    const topMovies = await APIService.getTopMoviesAllTime();

    const newMovies = await APIService.getTopNewMovies();
    
    //set the values of the list
    setTopMovieList(topMovies.results);
    setComedyMoviesList(topComedy.results);
    setNewMoviesList(newMovies.results);
    setBackDrops([topMovies.results[0].backdrop_path, topComedy.results[1].backdrop_path, newMovies.results[2].backdrop_path, topMovies.results[3].backdrop_path]);
  }

  const login = (prod) =>{
    setCookie('user', prod, {path: '/'});
  }
  const delCook = () =>{
    removeCookie('user', {path: '/'});
  }

  return (
    <>
      {/* Nav bar  */}
      <Nav isLog={(cookies.user != undefined)? true : false}/>
      {/* these two are needed for routing */}
      <h1></h1>
      <Routes>
        {/* Each route will be its own component under the element tage */}
        <Route exact path='/' element={
          // This is just an example of one card, whoever does the home page can remove this and put it in their page. 
          <Home topMovies={topMoviesList} topComedy={comedyMoviesList} newMovies={newMoviesList} backdrops={backdrops} setOneMovieIDFunc={loadOneMovie} changeSearch={setSearchResults}/>
        }/>
        <Route exact path='/login' element={
          <Login setLogin={login} userCook={cookies.user} deleteCookie={delCook}/> 
        }/>
        <Route exact path='/register' element={
          <Register/> 
        }/>
        <Route exact path='/MyList' element={
          (cookies.user != undefined)? <MyList user={cookies.user} setOneMovieIDFunc={loadOneMovie}></MyList>: <Login setLogin={login}/>
          
        }/>
        <Route exact path='/results' element={
          <SearchResults changeSearch={setSearchResults} searchResults={searchResults} setOneMovieIDFunc={loadOneMovie}/>
        }/>
        <Route exact path='/OneMovie' element={
          <OneMovie setOneMovieIDFunc={loadOneMovie} movie={oneMovie}/>
        }/>
        <Route exact path="/AddToList" element={<AddToList movie={oneMovie}/>} />

      </Routes>
      

      {/* Footer bar will go here: */}
    </>
  );
}

export default App;
