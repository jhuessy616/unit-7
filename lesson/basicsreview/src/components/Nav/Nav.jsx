// rfce -> react functional component export 
// sets up our component and ufntion for us 
import React from 'react'
import "./Nav.css"

function Nav() {
  return (
      <div className='navbar'>
          <a href="/" className="nav-link"> About</a>
          <a href="/" className="nav-link"> Princing</a>
          <a href="/" className="nav-link"> Content</a>
    </div>
  )
}

export default Nav