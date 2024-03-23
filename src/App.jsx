// React imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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


function App() {

  return (
    <>
      {/* Nav bar  */}
      <Nav/>
      {/* these two are needed for routing */}
      <BrowserRouter>
      <Routes>
        {/* Each route will be its own component under the element tage */}
        <Route exact path='/' element={
          // This is just an example of one card, whoever does the home page can remove this and put it in their page. 
            <Card movie={testdata}/>
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
          <p>Search results</p> 
        }/>
        <Route exact path='/OneMoviePage' element={
          <OneMoviePage/>
        }/>

      </Routes>
      </BrowserRouter>

        {/* Footer bar will go here: */}
    
    </> 
    
  )
}

export default App
