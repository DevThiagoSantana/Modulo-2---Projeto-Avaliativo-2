import PropTypes from 'prop-types'
import { StudentsListContainer } from './styles'
import StudentsCard from '../StudentsCard/StudentsCard'

function StudentsList({ list }) {
  return (
    <StudentsListContainer>
      {list.map((students) => (
        <li key={students.id}>
          <StudentsCard
            id={students?.id}
            name={students?.name}
            phone={students?.phone}
            birthdate={students?.birthdate}
            cpf={students?.cpf}
            grade={students?.grade}
          />
        </li>
      ))}
    </StudentsListContainer>
  )
}

StudentsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
      birthdate: PropTypes.date,
      grade: PropTypes.number.isRequired,
      cpf: PropTypes.string.isRequired
    })
  )
}

StudentsList.defaultProps = {
  list: []
}

export default StudentsList
