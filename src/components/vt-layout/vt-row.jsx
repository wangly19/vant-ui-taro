import React from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-row.scss'
import { pxToTransform } from '@/utils/transform'

function VtRow ({
  className,
  customStyle = {},
  children,
  type,
  gutter,
  align,
  justify
}) {

  /**
   * @wang 对子元素注入gutter属性
   */
  const vtColList = () => {
    const slot =  gutter ? React.Children.map(children, el => {
      return React.cloneElement(el, { gutter: gutter })
    }) : children
    return slot
  }

  const spaces = gutter ? {
    marginLeft: pxToTransform(-(Number(gutter)/2)),
    marginRight: pxToTransform(-(Number(gutter)/2)),
  } : {}

  return (
    <View
      style={Object.assign(spaces, customStyle)}
      className={classNames(
        'vt-row',
        type && `vt-row--${type}`,
        align && `vt-row--align- ${align}`,
        justify && `vt-row--justify-${justify}`,
        className
      )}
    >
    { vtColList() }
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
