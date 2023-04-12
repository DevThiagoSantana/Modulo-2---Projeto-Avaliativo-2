import { createContext, useContext, useState } from 'react'
import useUser from '../useUser/useUser'
import { useNavigate } from 'react-router-dom'

const AuthenticationContext = createContext({})

export function useAuthenticationContext() {
  return useContext(AuthenticationContext)
}

export const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const { postRequest } = useUser()

  const login = async (email, password) => {
    console.log(email, password)
    const data = await postRequest('/login', { email, password })
    console.log(data)
    if (data) {
      setUser({ id: data.user.id, name: data.user.name })
      localStorage.setItem('token', data.accessToken)
      navigate('/home')
    }
  }

  const logout = () =>{
    localStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }

  return <AuthenticationContext.Provider value ={{ login, logout, user }} > {children} </ AuthenticationContext.Provider>
}

export default useAuthenticationContext