import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export  const Navbar = ()=>{
 
    return (
      <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-5">
  <div className="container-fluid">
 <Link className="navbar-brand" to="/">useContext </Link>
   

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <NavLink className={({isactive})=> `nav-link ${isactive ? 'active':''}`} to='/' >
                Home
               </NavLink>
               <NavLink className={({isactive})=> `nav-link ${isactive ? 'active':''}`} to='/about' >
                About
               </NavLink>
               <NavLink className={({isactive})=> `nav-link ${isactive ? 'active':''}`} to='/login' >
                Login
               </NavLink>
            
            
              </ul>
              
            </div>
  </div>
</nav>
      </>
    )
  }
