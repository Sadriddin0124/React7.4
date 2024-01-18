import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './components/Auth'
import Admin from './components/Products'
import Users from './components/Users'
import Products from './components/Products'
import Home from './components/Figma/Home/Home.jsx'
import Blog from './components/Figma/Blog/Blog.jsx'
import Works from './components/Figma/Works/Works.jsx'
import WorksChild from './components/Figma/Works/WorksChild.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='works' element={<Works/>}/>
        <Route path='works_child' element={<WorksChild/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='users' element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default App
