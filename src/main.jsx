import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import myCreateRoute from './Components/MainLayout/Route'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/Firebase/Provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={myCreateRoute} />
    </AuthProvider>
    </QueryClientProvider>
    </HelmetProvider>
    </React.StrictMode>,
)
