import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='m-5'>
      <div className='pt-12'>
        <h2 className='text-5xl font-bold text-center'>Crear Cuenta</h2>
        <p className='text-center m-10 '>Cree una Cuenta para Agendar una Cita</p>  
      </div>

      <form>
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between items-center gap-2'>
            <label 
              htmlFor="email"
              className='flex-none w-20'>Email:
            </label>
            <input 
              type="email"
              id='email'
              name='email'
              placeholder='Ingrese su Email'
              className='rounded-md text-black w-full p-2' />
          </div>
          <div className='flex justify-between items-center gap-2'>
            <label 
              htmlFor="username"
              className='flex-none w-20'>Nombre de Usuario:
            </label>
            <input 
              type="text"
              id='username'
              name='username'
              placeholder='Ingrese su Nombre de Usuario'
              className='rounded-md text-black w-full p-2'/>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <label 
              htmlFor="phone_number"
              className='flex-none w-20 block'>Teléfono:
            </label>
            <input 
              type="number"
              id='phone_number'
              name='phone_number'
              placeholder='Ingrese su Número de Teléfono'
              className='rounded-md text-black w-full p-2' />
          </div>
          <div className='mt-3 flex justify-between gap-2'>
            <label 
              htmlFor="password"
              className='flex-none w-20'>Password: 
            </label>
            <input 
              type="password"
              id='password'
              name='password'
              placeholder='Ingrese su Contraseña'
              className='rounded-md text-black w-full p-2' />
          </div>
          <div className='mt-3 flex justify-between gap-2'>
            <label 
              htmlFor="password_confirmation"
              className='flex-none w-20'>Repetir Password: 
            </label>
            <input 
              type="password"
              id='password_confirmation'
              name='password_confirmation'
              placeholder='Repetir Contraseña'
              className='rounded-md text-black w-full p-2' />
          </div>
          <input 
            type="submit"
            value='Crear Cuenta'
            className='bg-blue-600 hover:bg-blue-800 transition-colors rounded font-bold p-2 mt-8 w-40'
          />
        </div>
      </form>
      <div className='flex justify-between mt-10 gap-2 text-sm text-gray-400'>
        <Link to="/">¿Ya Tienes una Cuenta? Inicia Sesión</Link>
        <Link to="#">¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
  )
}

export default Register