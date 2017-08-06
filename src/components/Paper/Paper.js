import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

/** Paper Element as a base layer for components */
class Paper extends PureComponent {
  render () {
    return (
      <div>
        is background
        {this.props.children}
      </div>
    )
  }
}

Paper.propTypes = {
   /** background color scheme */
  background: PropTypes.oneOfType(['string', 'object']),
  /** shadown depth range between 0 - 5 */
  zDepth: PropTypes.number
}

Paper.defaultProps = {
  background: '#FFF',
  zDepth: 0
}

export default Paper
