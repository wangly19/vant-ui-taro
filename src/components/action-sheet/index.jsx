import React from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-action-sheet.scss'

function VtActionSheet ({
  className,
  customStyle = {},
  children,
}) {
  return (
    <View>
      
    </View>
  )
}

VtActionSheet.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
}

VtActionSheet.defaultProps = {
  gutter: 0
}

export default VtActionSheet 
