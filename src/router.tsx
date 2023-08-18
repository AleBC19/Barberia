import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import Register from './pages/Register'

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
  },
  {
    path: '/auth',
    element: <Layout/>,
    children: [
      {
        path: '/auth/register',
        element: <Register/>
      },
      {
        path: '/auth/forgot-password',
        element: 'forgot-password'
      }
    ]
  }
])

export default router