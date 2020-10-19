import React from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-toast.scss'

function VtToast (props) {
  const {
    className,
    customStyle,
    children,
  } = props
  return (
    <View 
      style={ customStyle }
      className=""
    >
    </View>
  )
}

VtToast.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  type: PropTypes.string,
  position: PropTypes.string,
  transition: PropTypes.string,
  lockScroll: PropTypes.bool,
  position: PropTypes.string,
  iconPrefix: PropTypes.string,
  loadingType: PropTypes.string,
  forbidClick: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  message: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
  
}

VtToast.defaultProps = {
  icon: PropTypes.string,
  className: null,
  type: 'text',
  position: 'middle',
  transition: 'van-fade',
  lockScroll: false,


}

export default VtToast 
