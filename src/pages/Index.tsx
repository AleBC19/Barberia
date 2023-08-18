import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../config/axiosClient'
import Alert from '../components/Alert'

const Index = () => {
  const emailRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()

  const [errors, setErrors] = useState([])

  const handleSubmit = async (evt: React.SyntheticEvent) => {
    evt.preventDefault()

    const datos = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    }

    axiosClient.post('/login', datos)
      .then(({ data }) => localStorage.setItem('AUTH_TOKEN', data.token))
      .catch(error => setErrors(Object.values(error.response.data.errors)))
  }

  return (
    <div className='m-5'>
      <div className='pt-12'>
        <h2 className='text-5xl font-bold text-center'>Login</h2>
        <p className='text-center m-10 '>Inicia Sesion con tus datos</p>  
      </div>

      { errors ? errors.map((error, i) => <Alert key={i}>{error}</Alert>) : null }

      <form onSubmit={handleSubmit}>
        <div className='flex justify-between items-center '>
          <label 
            htmlFor="email"
            className='flex-none w-20'>Email:
          </label>
          <input 
            type="text"
            id='email'
            name='email'
            placeholder='Ingrese su Email'
            ref={emailRef}
            className='rounded-md text-black w-full p-2' />
        </div>
        <div className='mt-3 flex justify-between'>
          <label 
            htmlFor="password"
            className='flex-none w-20'>Password: 
          </label>
          <input 
            type="password"
            id='password'
            name='password'
            ref={passwordRef}
            placeholder='Ingrese su contraseña'
            className='rounded-md text-black w-full p-2' />
        </div>
        <button 
          type="submit"
          className='bg-blue-600 hover:bg-blue-700 transition-colors rounded font-bold p-2 mt-8 w-40'>Iniciar Sesión</button>
      </form>
      <div className='flex justify-between mt-10 gap-2 text-sm text-gray-400'>
        <Link to="/auth/register">¿Aún no tienes una cuenta? Crea Una</Link>
        <Link to="#">¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
  )
}

export default Index