import PropTypes from 'prop-types'
import { AccompanimentsListContainer } from './styles'
import AccompanimentsCard from '../AccompanimentsCard/AccompanimentsCard'

function AccompanimentsList({ list }) {
  return (
    <AccompanimentsListContainer>
      {list.map((accompaniments) => (
        <li key={accompaniments.id}>
          <AccompanimentsCard
            id={accompaniments?.id}
            userId={accompaniments?.userId}
            studentId={accompaniments?.studentId}
            date={accompaniments?.date}
            title={accompaniments?.title}
            description={accompaniments?.description}
            finished={accompaniments?.finished}
          />
        </li>
      ))}
    </AccompanimentsListContainer>
  )
}

AccompanimentsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      studentId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      finished: PropTypes.bool
    })
  )
}

AccompanimentsList.defaultProps = {
  list: []
}

export default AccompanimentsList
