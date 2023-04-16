import { useNavigate } from 'react-router-dom'
import Button, { BUTTON_VARIANT } from '../../components/Button'

import './ListStudents.css'

function ListStudents() {
  const navigate = useNavigate()

  return (
    <div className="listStudentsContainer">
      <div className="listHeader">
        {/* <CourseFilter onFilter={} /> */}
          <Button
            variant={BUTTON_VARIANT.SECONDARY}
            onClick={() => navigate('/students/register')}
          >
            Cadastrar Aluno
          </Button>
      </div>
    </div>
  )
}
export default ListStudents
