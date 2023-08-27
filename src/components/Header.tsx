import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Header = () => {

  const { logout, user } = useAuth({ middleware: 'auth' })

  console.log(user)

  return (
    <header className='mt-6 md:w-full'>
      <div className='md:flex justify-between'>
        <h1 className='font-black text-5xl px-4'>AppSalon</h1>

        <div className='flex flex-col gap-5 px-3'>
          <div className='flex items-center gap-3'>
            <p>Hola: <span className='font-semibold'>{ user?.name }</span></p>
            <button
              onClick={logout}
              value='Cerrar Sesión'
              className='bg-red-600 hover:bg-red-700 cursor-pointer px-2 py-1 rounded font-bold'
            >Cerrar Sesión</button>
          </div>

          <div className='flex items-center gap-4 font-bold uppercase'>
            <Link to='/reservaciones'>Mis Citas</Link>
            <Link 
              className='bg-blue-600 hover:bg-blue-700 hover:transition-colors rounded p-2'
              to='/reservaciones/nueva'>Nueva Cita</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header