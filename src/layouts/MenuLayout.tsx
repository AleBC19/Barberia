import { Outlet } from 'react-router-dom'
import ImgLayout from './ImgLayout'
import NavbarMenu from '../components/NavbarMenu'

const MenuLayout = () => {
  return (
    <main className='md:flex'>
      <ImgLayout/>

      <section className='w-full'>
        <NavbarMenu/>
        <Outlet />
      </section>
    
    </main>
  )
}

export default MenuLayout