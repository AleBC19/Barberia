import { Outlet } from 'react-router-dom'
import ImgLayout from './ImgLayout'
import Header from '../components/Header'
import { useAuth } from '../hooks/useAuth'

const MenuLayout = () => {

  const { user, error } = useAuth({ middleware: 'auth' })

  return (
    <main className='md:flex'>
      <ImgLayout/>

      <section className='w-full'>
        <Header/>
        <Outlet />
      </section>
    
    </main>
  )
}

export default MenuLayout