import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import PropTypes from 'prop-types'
import '@/styles/vt-button.scss'

class VtButton extends Component {

  static defaultProps = {
    type: 'default',
    size: 'large',
    disabled: false,
    loading: false,
    round: false,
    block: false,
    ghost: false
  }

  /**
   * 按钮内容
   */
  ButtonText = () => {
    const { children, text } = this.props
    return text || children
  }

  render () {
    const { 
      disabled, 
      type, 
      size, 
      round,
      block,
      ghost,
      className,
      customStyle
    } = this.props
    return (
      <View 
        style={customStyle}
        className={classNames(
        'vt-button',
        block && `vt-button--block`,
        round && 'vt-button--circle',
        disabled && 'vt-button--disabled',
        `vt-button--${type}`,
        type !== 'default' && ghost && `vt-button--${type}-ghost`,
        `vt-button--${size}`,
        className
        )}>
        { this.ButtonText() }
      </View>
    )
  }
}

/**
 * VtButton 类型声明
 */
VtButton.propTypes = {  
  type: PropTypes.oneOf(['primary', 'info', 'warning', 'danger', 'default']),
  size: PropTypes.oneOf(['large', 'default', 'small', 'mini']),
  block: PropTypes.bool,
  color: PropTypes.string,
  text: PropTypes.string,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  loading: PropTypes.bool,
}

export default VtButton