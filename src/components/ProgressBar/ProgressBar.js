import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class ProgressBar extends PureComponent {
  getColor (percent) {
    if (this.props.percent === 100) return 'green'
    return this.props.percent > 50 ? 'lightgreen' : 'red'
  }

  getWidthAsPercentageOfTotalWidth (percent) {
    return parseInt(this.props.width * (this.props.percent / 100), 10)
  }

  render () {
    const {percent, width, height} = this.props
    return (
      <div style={{border: '1px solid lightgray', width: width}}>
        <div style={{
          width: this.getWidthAsPercentageOfTotalWidth(percent),
          height: height,
          backgroundColor: this.getColor(percent)
        }} />
      </div>
    )
  }
}

ProgressBar.propTyepes = {
  percent: PropTypes.number.isRequired,
  height: PropTypes.number,
  width: PropTypes.string
}

export default ProgressBar
