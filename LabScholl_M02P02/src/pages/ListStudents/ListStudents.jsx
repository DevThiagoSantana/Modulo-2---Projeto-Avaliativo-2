import { Spinner } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import {
  ListHeader,
  ListStudentsContainer
} from './styles'
import StudentsFilter from '../../components/StudentsFilter/StudentsFilter'
import useUser from '../../hooks/useUser/useUser'

import './ListStudents.css'
import StudentsList from '../../components/StudentsList/StudentsList'
import { useEffect } from 'react'
function ListStudents() {
  const navigate = useNavigate()
  const { students, error, isLoading, getStudents } = useUser()

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <ListStudentsContainer>
      <ListHeader>
        <StudentsFilter onFilter={getStudents} />
          <Button
            variant={BUTTON_VARIANT.SECONDARY}
            onClick={() => navigate('/students/register')}
          >
            Cadastrar Atendimento
          </Button>
      </ListHeader>

      {isLoading && <Spinner width={100} />}
      {!isLoading && !!error && <p>{error}</p>}
      {!isLoading && !error && !!students.length && (
        <StudentsList list={students} />
      )}

      {!isLoading && !error && !students.length && (
        <img
          height={500}
          alt="Imagem de nenhum item encontrado"
        />
      )}
    </ListStudentsContainer>
  )
}

export default ListStudents
