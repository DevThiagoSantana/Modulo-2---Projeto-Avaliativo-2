import { Spinner } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import {
  ListHeader,
  AccompanimentsContainer
} from './styles'
import AccompanimentsFilter from '../../components/AccompanimentsFilter/AccompanimentsFilter'
import useUser from '../../hooks/useUser/useUser'

import './Accompaniments.css'
import AccompanimentsList from '../../components/AcccompanimentsList/AccompanimentsList'
import { useEffect } from 'react'

function Accompaniments() {
  const navigate = useNavigate()
  const { accompaniments, error, isLoading, getAccompaniments } = useUser()

  useEffect(() => {
    getAccompaniments()
  }, [])

  return (
    <AccompanimentsContainer>
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
        {console.log(accompaniments)}
      {!isLoading && !error && !!accompaniments.length && (
        <AccompanimentsList list={accompaniments} />
      )}

      {!isLoading && !error && !accompaniments.length && (
        <img
          height={500}
          alt="Imagem de nenhum item encontrado"
        />
      )}
    </AccompanimentsContainer>
  )
}

export default Accompaniments
