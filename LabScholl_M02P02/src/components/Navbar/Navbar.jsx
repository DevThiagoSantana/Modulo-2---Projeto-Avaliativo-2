import { Link, useLocation } from 'react-router-dom'
import Button, { BUTTON_VARIANT } from '../Button'
import useAuthenticationContext from '../../hooks/UseAuthentication/useAuthentication'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false)
  // const navigate = useNavigate()
  const { logout } = useAuthenticationContext()

  const handleLogout = () => {
    setLoading(true)
    logout()
    setLoading(false)
  }

  return (
    <>
    {location.pathname !== '/login' && location.pathname !== '/register' && (
      <header className="navbarContainer">
        <Link to="/" className="navbarLogoBox">
          <img src="/logo.svg" alt="Logo" />
          <h1>LabSchool</h1>
        </Link>
        <Button
            variant={BUTTON_VARIANT.PRIMARY_OUTLINED}
            onClick={handleLogout}
          >
             Sair
        </Button>
      </header>
    )}
    </>
  )
}

export default Navbar
