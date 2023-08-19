import { Outlet } from 'react-router-dom'
import ImgLayout from './ImgLayout'
import Header from '../components/Header'

const MenuLayout = () => {
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