import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx';
import Crew from './components/Crew/Crew.jsx';
import Destination from './components/Destination/Destination.jsx';
import Technology from './components/Technology/Technology.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },

  {
    path: 'destination',
    element: <Destination/>,
  },

  {
    path: 'crew',
    element: <Crew/>,
  },

  {
    path: 'technology',
    element: <Technology/>,
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
