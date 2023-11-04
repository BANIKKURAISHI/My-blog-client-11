import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import myCreateRoute from './Components/MainLayout/Route'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRoute} />
  </React.StrictMode>,
)
