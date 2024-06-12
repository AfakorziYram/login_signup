import React from 'react';
import { NavLink } from 'react-router-dom';


function MainNavigation() {
  return (
    <header className=' bg-gradient-to-r from-orange-400 via-pink400 via-purple-400 to-red-400 '>
        
        <nav className='flex justify-between mx-6 items-center p-2 '>
          <NavLink to='/'> <h2 className='text-2xl font-bold py-3'>MyApp</h2></NavLink> 
          <div className='flex gap-2'>
            <ul className='flex  gap-4 justify-end '>
              <li><NavLink to='home'>Home</NavLink></li>
              <li><NavLink to='about'>About</NavLink></li>
              <li><NavLink to='signin'>SignIn</NavLink></li>            
            </ul>
            <NavLink to='signin'><button  className='bg-slate-800 text-white rounded-2xl font-semibold text-sm p-1 uppercase hover:bg-black disabled:opacity-50 mx-5'>Logout</button></NavLink> 
          </div>
         
        </nav>
    </header>
  )
}

export default MainNavigation