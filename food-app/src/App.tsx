import React from 'react'
import Home from './home'
import Veg from './veg'
import NonVeg from './nonveg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Nonveg from './nonveg'

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/Home">Home</Link>
        <Link to="/Veg">Veg</Link>
        <Link to="/NonVeg">Non Veg</Link>
        <Routes>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Veg" element={<Veg></Veg>}></Route>
          <Route path="/NonVeg" element={<Nonveg></Nonveg>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
