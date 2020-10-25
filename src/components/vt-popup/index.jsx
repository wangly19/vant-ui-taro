import React from 'react'
import { View } from '@tarojs/components'
import VtIcon from '@/components/vt-icon'
import VtOverflow from '@/components/vt-overflow'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-popup.scss'

function VtPopUp (props) {
  const {
    children,
    overlay
  } = props

  const renderOverlay = () => {
    if (overlay) {
      return <VtOverflow>

      </VtOverflow>
    }
  }
  
  return (
    <View>
      { renderOverlay() }
    </View>
  )
}

VtPopUp.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  children: PropTypes.element,
  show: PropTypes.bool,
  zIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  duration: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  teleport: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  overlayClass: PropTypes.string,
  overlayStyle: PropTypes.object,
  overlay: PropTypes.bool,
  lockScroll: PropTypes.bool,
  lazyRender: PropTypes.bool,
  closeOnClickOverlay: PropTypes.bool

}

VtPopUp.defaultProps = {
  overlay: true,
  lockScroll: true,
  lazyRender: true,
  closeOnClickOverlay: true
}

export default VtPopUp
