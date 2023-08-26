import { Link, useLocation } from 'react-router-dom'
import useBarber from '../hooks/useBarber'
import Service from '../components/Service'
import { STYLES_NAV_LINK, URLS } from '../constants'

const CreateReservation = () => {

  const { services } = useBarber()
  const route = useLocation()

  const isPageNewReservation = route.pathname === URLS.services
  const stylesLink = isPageNewReservation ? STYLES_NAV_LINK.isActive : STYLES_NAV_LINK.notActive

  
  return (
    <>
      <div className='flex items-center justify-center mt-7  px-2'>
        <nav className='w-11/12 flex justify-around gap-2'>
          <Link 
            className={`${stylesLink} hover:transition-colors rounded w-full text-center uppercase font-bold py-3`}
            to='/reservaciones/nueva/services'>Servicios</Link>
          <Link 
            className='bg-gray-200 hover:bg-blue-600 text-blue-600 hover:transition-colors rounded w-full text-center uppercase font-bold py-3' 
            to='/reservaciones/nueva/resumen'>Citas y Resumen</Link>
        </nav>
      </div>

      <div className='my-10 grid md:grid-cols-2 gap-3 px-5'>
        {services.map(service => (
          <Service
            key={service.id}
            nameService={service.nameService}
            price={service.price}
          />
        ))}
      </div>
    </>
  )
}

export default CreateReservation