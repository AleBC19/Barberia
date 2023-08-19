import { Outlet } from 'react-router-dom'
import ImgLayout from './ImgLayout'

const MainLayout = () => {
  return (
    <main className='md:flex'>
      <ImgLayout/>

      <section className='w-full'>
        <Outlet />
      </section>
    </main>
  )
}

export default MainLayout