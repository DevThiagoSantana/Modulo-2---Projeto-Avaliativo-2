import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Button, { BUTTON_VARIANT } from '../Button'
import {
  AccompanimentsCardContainer
} from './styles.js'

function AccompanimentsCard({ id, userId, date, studentId, title, description, finished }) {
  const navigate = useNavigate()

  const handleNavigateDetails = () => {
    navigate(`/accompaniments/edit/${id}`)
  }
  return (
    <AccompanimentsCardContainer>

      <h2>Atendimento</h2>
      <p>
        <strong>Pedagogo: </strong>
        <span>{userId}</span>
      </p>
      <p>
        <strong>Nome aluno:</strong>
        <span>{studentId}</span>
      </p>
      <p>
        <strong>titulo:</strong> <span>{title}</span>
      </p>
      <p>
        <strong>Descrição:</strong> <span>{description}</span>
      </p>
      <p>
        <strong>Data do Atendimento</strong> <span>{date}</span>
      </p>
      <p>
        <strong>Atendimento finalizado?</strong> <span>{finished ? 'Sim' : 'Não' }</span>
      </p>

      <Button
        variant={BUTTON_VARIANT.SECONDARY_OUTLINED}
        onClick={handleNavigateDetails}
      >
       Editar
      </Button>

    </AccompanimentsCardContainer>
  )
}
AccompanimentsCard.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      studentId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      finished: PropTypes.bool
    }))
}

export default AccompanimentsCard
