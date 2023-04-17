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
  const navigate = useNavigate()

  const pedagogo = localStorage.getItem('pedagogo')
  const handleLogout = () => {
    setLoading(true)
    logout()
    setLoading(false)
  }
  const handleStudents = () => {
    navigate('/students')
  }
  const handleAccompaniments = () => {
    navigate('/accompaniments')
  }

  return (
    <>
    {location.pathname !== '/login' && location.pathname !== '/register' && (
      <header className="navbarContainer">
        <Link to="/home" className="navbarLogoBox">
          <img src="/logo.svg" alt="Logo" />
          <h3>LabSchool</h3>
        </Link>
        <h3 className='NamePedagogo'>Pedagogo: {pedagogo}  </h3>
        <div className='Botoes'>
          <Button
            type="button"
            onClick={handleStudents}
            > Aluno
          </Button>
          <Button
            type="button"
            onClick={handleAccompaniments}
            > Atendimentos
          </Button>
          <Button
              variant={BUTTON_VARIANT.PRIMARY_OUTLINED}
              onClick={handleLogout}
            >
               Sair
          </Button>
        </div>
      </header>
    )}
    </>
  )
}

export default Navbar
