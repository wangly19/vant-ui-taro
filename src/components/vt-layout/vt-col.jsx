import React from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-col.scss'
import { pxToTransform } from '@/utils/transform'

function VtCol ({
  className,
  customStyle,
  span,
  offset,
  gutter,
  children,
}) {

  console.log(gutter)

  const spaces = () => {
    return gutter ? {
      paddingLeft: pxToTransform(Number(gutter) / 2),
      paddingRight: pxToTransform(Number(gutter) / 2)
    } : {}
  }

  return (
    <View
      style={ Object.assign(spaces(), customStyle) }
      className={classNames(
        'vt-col',
        span && `vt-col--${Number(span)}`,
        offset && `vt-col--offset-${Number(offset)}`,
        className
      )}
    >
    { children }
    </View>
  )
}

VtCol.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  span: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

VtCol.defaultProps = {
  gutter: 0
}

export default VtCol 
