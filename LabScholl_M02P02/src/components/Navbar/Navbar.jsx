import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button, { BUTTON_VARIANT } from '../Button'
import useAuthenticationContext from '../../hooks/UseAuthentication/UseAuthentication'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false)
  const { logout, user } = useAuthenticationContext()
  const navigate = useNavigate

  const handleLogout = () => {
    setLoading(true)
    logout()
    setLoading(false)
  }
  const handleStudents =() => {
    navigate('/students')
  }

  return (
    <>
    {location.pathname !== '/login' && location.pathname !== '/register' && (
      <header className="navbarContainer">
        <Link to="/home" className="navbarLogoBox">
          <img src="/logo.svg" alt="Logo" />
          <h2>LabSchool</h2>
        </Link>
        <p>Pedagogo:
          <i></i>
        </p>
        <Button
          type="button"
          onClick={handleStudents}
          > Aluno
        </Button>
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
