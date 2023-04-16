import { Navigate } from 'react-router-dom'

const AuthRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') || false
  console.log(isAuthenticated)
  return (
    <>
      {isAuthenticated ? children : <Navigate to="/login" replace />}
    </>
  )
}

export default AuthRoute
