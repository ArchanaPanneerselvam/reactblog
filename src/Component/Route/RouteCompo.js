import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Hollwood from './Hollwood'
import Food from './Food'
import Fitness from './Fitness'
import Technology from './Technology'
import DataCompo from '../Store/Store';
import './style.css';
import DynamicComp from './DynamicComp'


import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function RouteCompo() {
  const [click,setClick]=useState(false)
  
  const handleClick=()=>{
    setClick(!click)
  }

  return (
    <>
    <h4 id='vertical'>The</h4><h1 id='size'>Siren</h1>
     <BrowserRouter>
     
     <nav className='navbar'>
          <div className='nav-container'>
            <ul className={click ? "nav-menu active":"nav-menu"}>
              <li className='nav-item'><NavLink  activeClassname="active"  to='/' className='nav-links'>Home</NavLink></li>
              <li className='nav-item'><NavLink activeClassname="active" to='/bollywood'  className='nav-links'>Bollywood</NavLink></li>
              <li className='nav-item'><NavLink activeClassname="active" to='/hollywood'  className='nav-links'>Hollywood</NavLink> </li>
              <li className='nav-item'><NavLink activeClassname="active" to='/food'  className='nav-links'>Food</NavLink> </li>
              <li className='nav-item'><NavLink activeClassname="active" to='/fitness'  className='nav-links'>Fitness</NavLink> </li>
              <li className='nav-item'><NavLink activeClassname="active" to='/technology'  className='nav-links'>Technology</NavLink> </li>
            </ul>
            <div className='nav-icon' onClick={handleClick} >
                {click ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
              </div>
          </div>
        </nav>
     <DataCompo>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/hollywood' element={<Hollwood/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/dynamic/:id' element={<DynamicComp/>}/>
     </Routes>
     </DataCompo>
     
     </BrowserRouter>
    <Footer />
     
    </>
  )
}

export default RouteCompo