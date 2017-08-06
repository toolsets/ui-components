import React from 'react'
import PropTypes from 'prop-types'

/**
 * Hello World Component is a sample component
 * */
function HelloWorld ({message}) {
  return <div>Hello {message} !</div>
}

HelloWorld.propTypes = {
  /** message to show */
  message: PropTypes.string
}

HelloWorld.defaultProps = {
  message: 'World'
}

export default HelloWorld
