import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import myCreateRoute from './Components/MainLayout/Route'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/Firebase/Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={myCreateRoute} />
    </AuthProvider>
  </React.StrictMode>,
)
