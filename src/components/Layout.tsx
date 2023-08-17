import { Outlet } from 'react-router-dom'
import barber from '../assets/barber.jpg'

const Layout = () => {
  return (
    <div className='grid md:grid-cols-2'>
      <section className=''>
        <div>
          <img src={barber} alt="Imagen barber" className='md:h-screen' />
        </div>
      </section>

      <section>
        <Outlet />
      </section>
      
    </div>
  )
}

export default Layout