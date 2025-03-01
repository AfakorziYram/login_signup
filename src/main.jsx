import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from '../src/components/store/redux_store.js'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router}  >
      <App/>
    </RouterProvider>
  </Provider>
)
