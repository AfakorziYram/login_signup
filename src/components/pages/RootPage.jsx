import React from 'react'
import MainNavigation from './MainNavigation';
import {Outlet} from 'react-router-dom';

function RootPage() {
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1422207258071-70754198c4a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJsYWNrfGVufDB8MHwwfHx8MA%3D%3D)] h-screen w-full bg-cover bg-center'>
      <MainNavigation/>
      {/* <h1 className='flex text-white text-3xl font-bold h-screen justify-center items-center'>WELCOME TO MY SIMPLE WEBSITE</h1> */}
      <Outlet/>
    </div>
  )
}

export default RootPage