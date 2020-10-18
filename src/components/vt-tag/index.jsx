import React from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-tag.scss'

function VtTag ({
  className,
  customStyle = {},
  children,
  size,
  color,
  textColor,
  type = 'default',
  plain = false,
  round = false,
  mark = false,
}) {
  const key = plain ? 'color' : 'backgroundColor'
  const style = { [key]: color }
  if (textColor) style.color = props.textColor;
  return (
    <View 
      style={ customStyle }
      className={
      classNames(
        'vt-tag',
        `vt-tag--${type}`,
        plain && `vt-tag--plain`,
        size && `vt-tag--${size}`,
        round && `vt-tag--round`,
        className
      )
    }>
    { children }
    </View>
  )
}

VtTag.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  type: PropTypes.oneOf([
    'primary',
    'success',
    'danger',
    'warning',
    'default'
  ]),
  size: PropTypes.oneOf([
    'large',
    'medium'
  ]),
  color: PropTypes.string,
  plain: PropTypes.bool,
  round: PropTypes.bool,
  mark: PropTypes.bool,
  textColor: PropTypes.string,
  closeable: PropTypes.string

}

export default VtTag 
