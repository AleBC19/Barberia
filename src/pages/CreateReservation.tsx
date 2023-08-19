import { Link } from 'react-router-dom'

const CreateReservation = () => {
  return (
    <>
      <div className='flex items-center justify-center mt-7  px-2'>
        <nav className='w-11/12 flex justify-around gap-2'>
          <Link 
            className='bg-blue-600 hover:bg-blue-700 hover:transition-colors rounded w-full text-center uppercase font-bold py-3' 
            to='/reservaciones/nueva/services'>Servicios</Link>
          <Link 
            className='bg-blue-600 hover:bg-blue-700 hover:transition-colors rounded w-full text-center uppercase font-bold py-3' 
            to='/reservaciones/nueva/resumen'>Citas y Resumen</Link>
        </nav>
      </div>

      <div className='my-10 grid md:grid-cols-2 gap-3 px-5'>
        <p>Service1</p>
        <p>Service2</p>
      </div>
    </>
  )
}

export default CreateReservation