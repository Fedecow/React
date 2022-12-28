import React from 'react'
import { Nav } from 'react-bootstrap'

const Navbar = () => {
  
  return (
    <div>
        <Nav className='navbar'>
          <h1>CODER ROPA</h1>
            <ul className='navUl'>
                <li>Ropa Hombre</li>
                <li>Ropa Mujer</li>
                <li>Accesorios</li>
                <li>Todo</li>
            </ul>
            
        </Nav>
    </div>
  )
}

export default Navbar;