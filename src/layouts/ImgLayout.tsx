import barber from '../assets/barber.jpg'

const ImgLayout = () => {
  return (
    <div className='md:w-4/5'>
      <img src={barber} alt="Imagen barber" className='md:h-screen' />
    </div>
  )
}

export default ImgLayout