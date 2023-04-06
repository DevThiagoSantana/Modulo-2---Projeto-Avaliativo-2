import { createContext, useContext, useState } from 'react'
import useUser from '../useUser/useUser'

const AuthenticationContext = createContext({})

export function useAuthenticationContext() {
  return useContext(AuthenticationContext)
}

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const {postRequest} = useUser()
  const login = async (email, password) =>{
    const data = await postRequest('/login', { email, password })
    if (data) {
      setUser({ id: data.user.id, name: data.user.name })
      localStorage.setItem('token', data.accessToken)
    }
  }

  
  const logout = async () =>{
    localStorage.removeItem('token', data.accessToken)
    setUser(null)
  }

  return <AuthenticationContext.Provider value ={{ login, logout, user }} > {children} </ AuthenticationContext.Provider>
}

export default useAuthenticationContext