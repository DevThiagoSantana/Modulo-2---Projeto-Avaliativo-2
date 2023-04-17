import { Spinner } from 'phosphor-react'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import AccompanimentsList from '../../components/AcccompanimentsList/AccompanimentsList'
import AccompanimentsFilter from '../../components/AccompanimentsFilter/AccompanimentsFilter'
import {
  ListHeader,
  HomePageContainer
} from './styles'
import useUser from '../../hooks/useUser/useUser'
import { useEffect } from 'react'

function HomePage() {
  const navigate = useNavigate()
  const { accompaniments, error, isLoading, getAccompaniments } = useUser()

  useEffect(() => {
    getAccompaniments()
  }, [])
  return (
    <HomePageContainer>
      <ListHeader>
        <AccompanimentsFilter onFilter={getAccompaniments} />
          <Button
            variant={BUTTON_VARIANT.SECONDARY}
            onClick={() => navigate('/accompaniments/register')}
          >
            Cadastrar Atendimento
          </Button>
      </ListHeader>

      {isLoading && <Spinner width={100} />}

      {!isLoading && !!error && <p>{error}</p>}

      {!isLoading && !error && !!accompaniments.length && (
        <AccompanimentsList list={accompaniments} />
      )}

      {!isLoading && !error && !accompaniments.length && (
        <img
          height={500}
          alt="Imagem de nenhum item encontrado"
        />
      )}
    </HomePageContainer>
  )
}

export default HomePage
