import React, { Component } from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-cell-group.scss'

class VtCellGroup extends Component {

  static defaultProps = {
    border: false
  }

  customClassNames = () => {
    const { className } = this.props
    return classNames(
      'vt-cell-group',
      className
    )
  }

  render () {
    const { children, title } = this.props
    return (
      <View className={ this.customClassNames() }>
        <View className="vt-cell-group__title">{ title }</View>
        { children }
      </View>
    )
  }
}

/**
 * VtCellGroup 类型声明
 */
VtCellGroup.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  title: PropTypes.string,
  border: PropTypes.bool.isRequired
}

export default VtCellGroup