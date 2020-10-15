import React, { Component } from 'react'
import { Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import { pxToTransform } from '@/utils/transform'
import './index.scss'

class VtIcon extends Component {

  static defaultProps = {
    custom: 'icon iconfont',
    size: 16,
    className: ''
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
 * VtIcon 类型声明
 */
VtIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  custom: PropTypes.string,
  className: PropTypes.string
}

export default VtIcon