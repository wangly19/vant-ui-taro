import React from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-row.scss'

function VtRow ({
  className,
  customStyle = {},
  gutter = 0,
  children,
  type,
  align,
  justify
}) {

  const createGutter = () => {
    const px = Number(gutter);
    if (!gutter) return
    const spaces = []
    const groups = [[]]
    let totalSpan = 0
    console.log(children)
  }

  return (
    <View
      customStyle
      className={classNames(
        'vt-row',
        type && `vt-row--${type}`,
        align && `vt-row--align- ${align}`,
        justify && `vt-row--justify-${justify}`,
        className
      )}
    >
    { children }
    </View>
  )
}

VtRow.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  type: PropTypes.oneOf(['flex']),
  align: PropTypes.oneOf([
    'bottom',
    'center'
  ]),
  justify: PropTypes.oneOf([
    'end', 
    'center', 
    'space-between', 
    'space-around'
  ]),
  gutter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

VtRow.defaultProps = {
  gutter: 0
}

export default VtRow 
