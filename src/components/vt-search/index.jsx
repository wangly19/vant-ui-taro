import React from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-action-sheet.scss'

function VtSearch (props) {

  const {
    className,
    customStyle,
    children,
    label,
    labelSlot
  } = props

  const Label = () => {
    if (label || labelSlot) {
      return (
        <View>
          { labelSlot || label }
        </View>
      )
    }
  }

  const Action = () => {}

  const fieldData = () => {}

  const 

  return (
    <View>
      
    </View>
  )
}

VtSearch.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  shape: PropTypes.oneOf(['sqaure', 'round']),
  value: PropTypes.string,
  label: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  clearable: PropTypes.bool,
  background: PropTypes.string,
  actionText: PropTypes.string,
  showAction: PropTypes.string,
  clearTrigger: PropTypes.string,
  leftSlots: PropTypes.element,

}

VtSearch.defaultProps = {
  customStyle: {},
  clearable: true,
  leftIcon: 'search',
  shape: 'square'
}

export default VtActionSheet 
