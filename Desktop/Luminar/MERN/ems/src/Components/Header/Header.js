import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
function Header() {
  return (
    <header>
            <Navbar  bg="dark" variant="dark"> 
          <Navbar.Brand href="/" >
            <i className='fa-solid fa-users fa-flip'></i>{' '}
            EMS Application
          </Navbar.Brand>
      </Navbar>
    </header>
  )
}

export default Header