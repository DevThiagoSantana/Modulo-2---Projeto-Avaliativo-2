import { useState } from 'react'
import PropTypes from 'prop-types'
import { StudentsFilterContainer } from './styles'
import Button, { BUTTON_VARIANT } from '../Button'
import InputGroup from '../InputGroup'

function StudentsFilter({ onFilter }) {
  const [filter, setFilter] = useState('')

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleClickFilter = () => {
    onFilter(filter)
  }

  return (
    <StudentsFilterContainer>
      <InputGroup
        type="text"
        placeholder="Busque pelo nome do curso"
        labelText="Buscar"
        value={filter}
        onChange={handleChangeFilter}
      />

      <Button
        variant={BUTTON_VARIANT.PRIMARY_OUTLINED}
        onClick={handleClickFilter}
      >
        Buscar
      </Button>
    </StudentsFilterContainer>
  )
}

StudentsFilter.propTypes = {
  onFilter: PropTypes.func
}

export default StudentsFilter
