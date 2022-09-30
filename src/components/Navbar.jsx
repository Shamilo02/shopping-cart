import React from 'react'

const Navbar = ({handleShopping, cart}) => {
    
  return (
    <nav>
        <h1 onClick={handleShopping}> Shopping Card  </h1>
        <div className="icon" onClick={handleShopping} >
        <i className='fas fa-basket-shopping'> </i> ({cart.length})
        </div>
    </nav>
  )
}

export default Navbar