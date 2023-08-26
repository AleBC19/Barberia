import { useContext } from 'react'
import BarberContext from '../context/BarberProvider'

const useBarber = () => {
  return useContext(BarberContext)
}

export default useBarber