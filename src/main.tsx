import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Index from './pages/Index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>, 
    children: [
      {
        index: true, 
        element: <Index/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
    />
  </React.StrictMode>,
)
