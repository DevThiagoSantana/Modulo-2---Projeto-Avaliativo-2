import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Button, { BUTTON_VARIANT } from '../Button'
import {
  StudentsCardContainer
} from './styles.js'

function StudentsCard({ id, name, phone, birthdate, cpf, grade }) {
  const navigate = useNavigate()

  const handleNavigateDetails = () => {
    navigate(`/students/${id}`)
  }
  return (
    <StudentsCardContainer>

      <h2>Atendimento</h2>
      <p>
        <strong> ID Aluno: </strong>
        <span>{id}</span>
      </p>
      <p>
        <strong>Nome aluno:</strong>
        <span>{name}</span>
      </p>
      <p>
        <strong>Telefone:</strong> <span>{phone}</span>
      </p>
      <p>
        <strong>Data de Nascimento:</strong> <span>{birthdate}</span>
      </p>
      <p>
        <strong>Cpf:</strong> <span>{cpf}</span>
      </p>
      <p>
        <strong>Nota</strong> <span>{grade}</span>
      </p>

      <Button
        variant={BUTTON_VARIANT.SECONDARY_OUTLINED}
        onClick={handleNavigateDetails}
      >
       Editar
      </Button>

    </StudentsCardContainer>
  )
}
StudentsCard.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
      birthdate: PropTypes.date,
      grade: PropTypes.number.isRequired,
      cpf: PropTypes.string.isRequired
    }))
}

export default StudentsCard
