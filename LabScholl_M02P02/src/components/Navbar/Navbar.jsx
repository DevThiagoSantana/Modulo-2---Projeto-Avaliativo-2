import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button, { BUTTON_VARIANT } from '../Button'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()


 const handleLogout = () => {
    handleNavigateLogin('/login')
  }

  return (
    <header className="navbarContainer">
      <Link to="/" className="navbarLogoBox">
        <img src="/logo.svg" alt="Logo" />
        <h1>LabSchool</h1>
      </Link>
      {location.pathname !== '/login' && (
        <Button
          variant={BUTTON_VARIANT.PRIMARY_OUTLINED}
          onClick={handleLogout}
        >
           Sair
        </Button>
      )}
    </header>
  )
}

export default Navbar
