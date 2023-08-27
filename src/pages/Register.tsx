import { Link } from 'react-router-dom'
import { createRef, useEffect, useState } from 'react'
import axiosClient from '../config/axiosClient'
import Alert from '../components/Alert'
import { AuthData } from '../types'

const Register = () => {
  useEffect(() => {
    document.title = 'Barber | Crear Cuenta'
  }, [])

  const emailRef = createRef<HTMLInputElement>()
  const nameRef = createRef<HTMLInputElement>()
  const phoneNumberRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()
  const passwordConfirmationRef = createRef<HTMLInputElement>()

  const [errors, setErrors] = useState([])

  const handleSubmit = async (evt: React.SyntheticEvent) => {
    evt.preventDefault()

    const datos: AuthData = {
      email: emailRef.current?.value,
      name: nameRef.current?.value,
      phone_number: phoneNumberRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation: passwordConfirmationRef.current?.value
    }

    try {
      const { data } = await axiosClient.post('/register', datos)
      console.log(data.token)
    } catch (error) {
      setErrors(Object.values(error.response.data.errors))
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='py-10 mb-4'>
        <h2 className='text-5xl font-black text-center'>Crear una Cuenta</h2>
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
          <div className='mb-5'>
            <label 
              htmlFor="username"
              className='uppercase font-semibold'
            >Username:</label>
            <input 
              type="text"
              id='username'
              name='name'
              placeholder='Ingrese su Nombre de Usuario'
              ref={nameRef}
              className='rounded-md text-black w-full p-2 mt-2' />
          </div>
          <div className='mb-5'>
            <label 
              htmlFor="phone_number"
              className='uppercase font-semibold'
            >Número de Teléfono:</label>
            <input 
              type="tel"
              id='phone_number'
              name='phone_numer'
              placeholder='Ingrese su Número de Teléfono'
              ref={phoneNumberRef}
              className='rounded-md text-black w-full p-2 mt-2' />
          </div>
          <div className='mb-5'>
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
          <div>
            <label 
              htmlFor="password_confirmation"
              className='uppercase font-semibold'
            >Repetir Password:</label>
            <input 
              type="password"
              id='password_confirmation'
              name='password_confirmation'
              ref={passwordConfirmationRef}
              placeholder='Repita su contraseña'
              className='rounded-md text-black w-full p-2 mt-2' />
          </div>
          <button 
            type="submit"
            className='bg-blue-600 hover:bg-blue-700 transition-colors rounded font-bold p-2 mt-10 w-full'>Crear Cuenta</button>
        </form>

        <div className='w-full flex md:flex-row md:justify-between flex-col items-center gap-2 my-10 text-sm text-gray-500 font-semibold '>
          <Link 
            className='hover:border-b border-blue-500'
            to="/auth/login">¿Ya tienes una cuenta? Inicia Sesión</Link>
          <Link 
            className='hover:border-b border-blue-500'
            to="#">¿Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </div>
  )
}

export default Register