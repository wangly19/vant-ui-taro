import React, { Component } from 'react'
import { Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import { pxToTransform } from '@/utils/transform'
import './index.scss'

class VtCell extends Component {

  constructor (props) {
    super(props)
  }

  static defaultProps = {
  }

  render () {
    const { name, custom, size, color, className } = this.props
    console.log(this.props)
    const rootStyle = {
      fontSize: `${pxToTransform(parseInt(String(size)) * 2)}`,
      color,
    }
    return (
      <Text
        className={[custom, name, className].join(' ')}
        style={ rootStyle }
      />
    )
  }
}

/**
 * VtCell 类型声明
 */
VtIcon.propTypes = {
  className: PropTypes.string
}

export default VtCell