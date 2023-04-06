import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import './CheckBox.css'

const CheckBox = forwardRef(({ labelText, helperText, ...props }, ref) => {
  return (
    <div className="container">
      {labelText && (
        <label htmlFor="input" className="label">
          <input id="input" className="input" ref={ref} type="checkbox" {...props} />
          {labelText}
        </label>
      )}

      {!!helperText && <span className="error">{helperText}</span>}
    </div>
  )
})

CheckBox.propTypes = {
  labelText: PropTypes.string,
  helperText: PropTypes.string
}

CheckBox.displayName = 'CheckBox'

export default CheckBox
