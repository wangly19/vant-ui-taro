import React, { Component } from 'react'
import { Text } from '@tarojs/components'

import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import { pxToTransform } from '@/utils/transform'
import '@/styles/vt-icon.scss'

class VtIcon extends Component {

  static defaultProps = {
    custom: 'icon iconfont',
    size: 24,
    className: ''
  }

  render () {
    const { name, custom, size, color, className, style } = this.props
    console.log(this.props)
    const rootStyle = {
      fontSize: `${pxToTransform(parseInt(String(size)))}`,
      color,
      ...style
    }
    return (
      <Text
        className={['vt-icon', custom, `icon-${name}`, className].join(' ')}
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