import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='mt-6'>
      <div className='flex justify-between'>
        <h1 className='font-black text-5xl px-4'>AppSalon</h1>

        <div className='flex flex-col gap-5 px-3'>
          <div className='flex items-center gap-3'>
            <p>Hola: <span className='font-semibold'>Rob</span></p>
            <input 
              type="submit"
              value='Cerrar Sesión'
              className='bg-red-600 hover:bg-red-700 cursor-pointer px-2 py-1 rounded font-bold'
            />
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