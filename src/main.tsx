import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import { BarberProvider } from './context/BarberProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BarberProvider>
        <RouterProvider router={router}/>
    </BarberProvider>
)
