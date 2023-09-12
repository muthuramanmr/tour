import React,{useState} from 'react'
import "./navbar.css"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

const Navbar = () => {
     const[active, setActive]= useState('navBar')
    const showNav = ()=>{
          setActive('navBar activeNavbar')
    }

    const removeNavbar = ()=>{
      setActive('navBar') 
}
     
  return (
   <section className='navBarSection'>
    <header className='header flex'>
      <div className='logoDiv'>
        <a href="#" className='logo flex'>
          <h1></h1><MdOutlineTravelExplore className="icon"/> <h1>My Tour</h1></a>
      </div>
      <div className={active}>
        <ul className='navLists flex'>
          <li class="navItem">

        
        
          <a href="#" className='navLink'>Home</a>
          </li>

          <li class="navItem">
          <a href="#" className='navLink'>Packages</a>
          </li>

          <li class="navItem">
          <a href="/Main" className='navLink'>Places</a>
          </li>     

          <li class="navItem">
          <a href="#" className='navLink'>Contact</a>
          </li>

          <li class="navItem">
          <a href="#" className='navLink'>About</a>
          </li>

            <button className="btn">
              <a href='#'>BOOK NOW</a>
            </button>
        </ul>
        <div onClick={removeNavbar} className='closeNavbar'>
    <AiFillCloseCircle className="icon"/>
       </div>
        
      </div>

      <div onClick={showNav} className='toggleNavbar' >
          <TbGridDots className="icon"/>
      </div>
     
      
    </header>
   
   </section>
  )
}

export default Navbar




