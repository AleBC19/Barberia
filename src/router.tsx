import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'
import MenuLayout from './layouts/MenuLayout'
import Reservations from './pages/Reservations'
import CreateReservation from './pages/CreateReservation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuLayout/>, 
    children: [
      {
        index: true,
        path: '/reservaciones',
        element: <Reservations/>
      },
      {
        path: '/reservaciones/nueva',
        element: <CreateReservation/>
      }
    ]
  },
  {
    path: '/auth',
    element: <MainLayout/>,
    children: [
      {
        path: '/auth/login',
        element: <Login/>
      },
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