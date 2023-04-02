import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Shop</Link>
        <Link to='/Checkout'>Checkout</Link>
    </div>
  )
}

export default Navbar