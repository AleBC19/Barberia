import { Link } from 'react-router-dom'

const Reservations = () => {
  return (
    <div className='mt-7 px-5'>
      <p className='font-bold text-3xl'>Mis Citas</p>
      <p className='font-semibold'>A continuación podrás administrar tus próximas citas</p>
      <Link to='/auth/login'>Login</Link>
    </div>
  )
}

export default Reservations