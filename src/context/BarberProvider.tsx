import { createContext, useState, useEffect } from 'react'
import axiosClient from '../config/axiosClient'
import { 
  Children, 
  GetServiceResponse, 
  Service,
} from '../types'

interface BarberContext {
  services: Service[]
}

const BarberContext = createContext<BarberContext>({} as BarberContext)

const BarberProvider: React.FC<Children> = ({ children }) => {

  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    const getServices = async () => {
      const { data } = await axiosClient<GetServiceResponse>('/services')
      setServices(data.data)
    }
    getServices()
  }, [])

  return (
    <BarberContext.Provider
      value={{
        services
      }}
    >
      {children}
    </BarberContext.Provider>
  )
}

export { BarberProvider}
export default BarberContext