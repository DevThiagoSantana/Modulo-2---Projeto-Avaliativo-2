import { HomePageContainer } from './styles'
import useAuthenticationContext from '../../hooks/UseAuthentication/useAuthentication'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  const { user } = useAuthenticationContext()

  return (
    <HomePageContainer>
      <Card>
      Nome do Pedagogo: <p>{user.name}</p>
      </Card>
      <Button
        type="button"
        onClick={() => navigate('/students')}
      >Cadastro de Aluno
      </Button>
    </HomePageContainer>
  )
}

export default HomePage
