import { Outlet } from 'react-router-dom'
import barber from '../assets/barber.jpg'

const Layout = () => {
  return (
    <div className='grid grid-cols-2'>
      <main className=''>
        <div className='bg-red-400 h-screen'>
          <img src={barber} alt="Imagen barber" className='h-screen' />
        </div>
      </main>

      <div>
        <Outlet />
      </div>
      
    </div>
  )
}

export default Layout