import React from 'react';
import Login from './components/pages/Login';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes/routes';
import RootPage from './components/pages/RootPage';


function App() {
  
  return (
    <div>
      <RootPage/>
    </div>
  )
}

export default App