// React imports
import { Route, Routes } from 'react-router-dom';

// Css imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//test data
import testdata from './services/json/testMovie.json'

//Our component imports
import OneMovie from './pages/OneMovie';
import AddToList from "./pages/AddToList";
import Nav from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import MyList from './pages/MyList';



function App() {
  return (
    <>
      {/* Nav bar  */}
      <Nav/>
      {/* these two are needed for routing */}
      
      <Routes>
        {/* Each route will be its own component under the element tage */}
        <Route exact path='/' element={
          // This is just an example of one card, whoever does the home page can remove this and put it in their page. 
          <Home/>
        }/>
        <Route exact path='/login' element={
          <Login/> 
        }/>
        <Route exact path='/register' element={
          <Register/> 
        }/>
        <Route exact path='/MyList' element={
          <MyList></MyList>
        }/>
        <Route exact path='/results' element={
          <SearchResults/>
        }/>
        <Route exact path='/OneMovie' element={
          <OneMovie movie={testdata}/>
        }/>
        <Route exact path="/AddToList" element={<AddToList movie={testdata}/>} />

      </Routes>
      

        {/* Footer bar will go here: */}
    
    </> 
    
  )
}

export default App
