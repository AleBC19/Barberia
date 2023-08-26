import { Service as ServiceInterface} from '../types'
import { formatMoney } from '../helpers'

const Service: React.FC<ServiceInterface> = ({ nameService, price}) => {
  return (
    <div className='bg-gray-100 py-5 px-3 rounded-md'>
      <p className='text-gray-950 text-xl'>{nameService}</p>
      <p className='font-black text-blue-600 text-3xl'>{formatMoney(price)}</p>
    </div>
  )
}

export default Service