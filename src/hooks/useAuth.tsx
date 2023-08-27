import { useEffect } from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../config/axiosClient'
import { AuthData, PropsUseAuth } from '../types'

export const useAuth = ({ middleware, url }: PropsUseAuth) => {

  const token = localStorage.getItem('AUTH_TOKEN')
  const navigate = useNavigate()

  const { data: user, error, mutate } = useSWR('/user', () =>
    axiosClient('/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data)
    .catch(error => {
      throw Error(error?.response?.data?.errors)
    })
  )
  
  const login = async (
    datos: AuthData, 
    setErrors: React.Dispatch<React.SetStateAction<never[]>>
  ) => {
    try {
      const { data } = await axiosClient.post('/login', datos)
      localStorage.setItem('AUTH_TOKEN', data.token)
      setErrors([])
      await mutate()
    } catch (error) {
      setErrors(Object.values(error.response.data.errors))
    }
  }

  const register = async () => {

  }

  const logout = async () => {

  }

  useEffect(() => {
    if (middleware === 'guest' && url && user) navigate(url)

    if (middleware === 'auth' && error) navigate('/auth/login')
   
  }, [user, error, middleware, url, navigate])
  
  return {
    login,
    register,
    logout,
    user,
    error
  }
}