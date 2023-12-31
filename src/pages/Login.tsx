/* eslint-disable @typescript-eslint/no-misused-promises */
import { createRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'
import { useAuth } from '../hooks/useAuth'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Login = () => {
  useEffect(() => {
    document.title = 'Barber | Inicia Sesión'
  }, [])

  const { login } = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const emailRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()

  const [errors, setErrors] = useState([])

  const handleSubmit = async (evt: React.SyntheticEvent): Promise<void> => {
    evt.preventDefault()

    const datos = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    }

    void login(datos, setErrors)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='py-10 mb-4'>
        <h2 className='text-5xl font-black text-center'>Login</h2>
        <p className='text-center m-5 font-semibold'>Inicia Sesion con tus datos</p>
      </div>

      { errors ? errors.map((error, i) => <Alert key={i}>{error}</Alert>) : null }

      <div className='lg:w-3/5 px-2'>
        <form onSubmit={handleSubmit}>
          <div className='mb-5'>
            <label
              htmlFor="email"
              className='uppercase font-semibold'
            >Email:</label>
            <input
              type="text"
              id='email'
              name='email'
              placeholder='Ingrese su Email'
              ref={emailRef}
              className='rounded-md text-black w-full p-2 mt-2' />
          </div>

          <div>
            <label
              htmlFor="password"
              className='uppercase font-semibold'
            >Password:</label>
            <input
              type="password"
              id='password'
              name='password'
              ref={passwordRef}
              placeholder='Ingrese su contraseña'
              className='rounded-md text-black w-full p-2 mt-2' />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className='bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors rounded font-bold p-2 mt-10 w-full'
          />
        </form>

        <div className='w-full flex md:flex-row md:justify-between flex-col items-center gap-2 my-10 text-sm text-gray-500 font-semibold '>
          <Link
            className='hover:border-b border-blue-500'
            to="/auth/register">¿Aún no tienes una cuenta? Crea Una</Link>
          <Link
            className='hover:border-b border-blue-500'
            to="#">¿Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
