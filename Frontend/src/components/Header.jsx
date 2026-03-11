import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
     <div className='flex justify-between items-center px-5 bg-amber-300'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6f4thC2A4DalM-SgyOPhZaaec04PwADttAQ&s" width="80px" alt="" />
        <nav>
          <ul className='flex gap-10'>
            <li>
            <NavLink to="/" className={({isActive})=> (isActive? "bg-orange-400 rounded p-1.5":""  )}>Home</NavLink>
            </li>
            <li>
<NavLink to ="adduser" className={({isActive})=> (isActive? "bg-orange-400 rounded p-1.5":""  )}>adduser</NavLink>
            </li>
            <li>
<NavLink to='userlist' className={({isActive})=> (isActive? "bg-orange-400 rounded p-1.5":""  )}>userlist</NavLink>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header