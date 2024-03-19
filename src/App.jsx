// React imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Css imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//Our component imports
import OneMoviePage from './pages/OneMoviePage';
import Card from './comp/Card';

//test data
import * as testdata from './assets/json/testMovie.json';

function App() {

  return (
    <>
      {/* Nav bar will go here: */}

      {/* these two are needed for routing */}
      <BrowserRouter>
      <Routes>
        {/* Each route will be its own component under the element tage */}
        <Route exact path='/' element={
          <Card movie={testdata}/>
        }/>
        <Route exact path='/login' element={
          <p>login</p> 
        }/>
        <Route exact path='/OneMoviePage' element={
          <OneMoviePage/>
        }/>

      </Routes>
      </BrowserRouter>

    </>
    
    
  )
}

export default App
