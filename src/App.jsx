import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import OneMoviePage from './pages/OneMoviePage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={
        <p>home</p> 
      }/>
      <Route exact path='/login' element={
        <p>login</p> 
      }/>
      <Route exact path='/OneMoviePage' element={
        <OneMoviePage/>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
