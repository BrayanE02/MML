import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

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
      <Route/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
