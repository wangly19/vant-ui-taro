import React from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-overflow.scss'

function VtOverFlow (props) {
  const {
    className,
    customStyle,
    show = false,
    zIndex,
    lockScroll = true,
    Children,
    onClick
  } = props

  const style = {
    zIndex,
    ...customStyle  
  }

  return (
    <View
      style={ style }
      className={
      classNames(
        'vt-overflow',
        className
      )
    }
    onClick={ onClick }
    onTouchmove={ lockScroll ? preventTouchMove : noop }
    >
      { Children }
    </View>
  )
}

VtOverFlow.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  show: PropTypes.bool,
  zIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  lockScroll: PropTypes.bool
}

export default VtOverFlow 
