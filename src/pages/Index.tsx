
const Index = () => {
  return (
    <div className='m-5'>
      <div className='pt-12'>
        <h2 className='text-2xl font-bold text-center'>Login</h2>
        <p className='text-center m-10 '>Inicia Sesion con tus datos</p>  
      </div>

      <form>
        <div className='flex justify-between'>
          <label 
            htmlFor="email"
            className='flex-none w-20'>Email:
          </label>
          <input 
            type="text"
            id='email'
            name='email'
            placeholder='Ingrese su Email'
            className='rounded-md text-black w-full p-1' />
        </div>
        <div className='mt-3 flex justify-between'>
          <label 
            htmlFor="password"
            className='flex-none w-20'>Password: 
          </label>
          <input 
            type="text"
            id='password'
            name='password'
            placeholder='Ingrese su contraseña'
            className='rounded-md text-black w-full p-1' />
        </div>
        <button 
          type="submit"
          className='bg-blue-600 font-bold p-2 mt-8 w-40'>Iniciar Sesión</button>
      </form>
      <div className='flex justify-between mt-10'>
        <a 
          href="">¿Aún no tienes una cuenta? Crea Una</a>
        <a 
          href=""
          className=''>¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  )
}

export default Index