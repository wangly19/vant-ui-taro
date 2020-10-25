import React, { Component } from 'react'
import VtIcon from '@/components/vt-icon'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import '@/styles/vt-loading.scss'

class VtLoading extends Component {
  static defaultProps = {
    size: 18,
    color: '',
    icon: `loading`,
    customStyle: {}
  }

  render() {
    const { size, color, icon, customStyle } = this.props
    return (
      <VtIcon
        className={classNames([
          'vt-loading',
          className
        ])}
        color={ color }
        name={ icon }
        size={ size }
      />
    )
  }
}

VtLoading.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  customStyle: PropTypes.object,
  color: PropTypes.string
}

export default VtLoading