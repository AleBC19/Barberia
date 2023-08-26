import { Children } from '../types'

const Alert: React.FC<Children> = ({ children }) => {
  return (
    <div className='text-center my-3 bg-red-500 border-l-8 border-red-900 text-white font-bold p-2 uppercase rounded-r-md'>
      {children}
    </div>
  )
}

export default Alert