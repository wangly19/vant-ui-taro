import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import VtIcon from '@/components/vt-icon'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-cell.scss'
import { navigateTo } from '@tarojs/taro'

class VtCell extends Component {

  static defaultProps = {
    center: false,
    border: false,
    isLink: false,
    large: false,
    arrowIcon: 'arrow_right',
  }

  Label = () => {
    const { label, slotLabel } = this.props
    const showLabel = slotLabel || label
    if (showLabel) {
      return (
        <View className="vt-cell__label">
          <Text>描述信息</Text>
        </View>
      )
    }
  }
  
  Title = () => {
    const { title, slotTitle, preIcon } = this.props
    const showTitle = slotTitle || title
    if (showTitle) {
      return (
        <View className="vt-cell__title">
          {
            preIcon && <VtIcon
              className="vt-cell__left-icon"
              name={ preIcon }
            />
          }
          { slotTitle ? slotTitle : <Text>{ title }</Text> }
          { this.Label() }
        </View>
      )
    }
  }

  Value = () => {
    const { value, slotValue } = this.props
    const showValue = value || slotValue
    if (showValue) {
      return (
        <View className="vt-cell__value">
          { slotValue ? slotValue : <Text>{ value }</Text> }
        </View>
      )
    }
  }

  /**
   * Cell右侧图标
   */
  rightIcon = () => {
    const { isLink, arrowIcon } = this.props
    if (isLink) {
      return (
        <VtIcon
          className="vt-cell__right-icon"
          name={arrowIcon}
        />
      )
    }
  }

  handleClick = (e) => {
    const { to, onClick } = this.props
    if (to) {
      navigateTo({
        url: to
      })
      onClick && console.warn(`
        警告: 在进行路由跳转的的情况下，本身onClick事件并不会执行。
      `)
      return
    }
    onClick(e)
  }

  render () {
    const { rightIcon, Title, Value } = this
    const { center, border, isLink, large, className } = this.props
    return (
      <View
        className={classNames(
          'vt-cell',
          center && 'vt-cell--center',
          border && 'vt-cell--border',
          isLink && 'vt-cell--clickable',
          large && 'vt-cell--large',
          className
        )}
        onClick={ this.handleClick }
      >
        { Title() }
        { Value() }
        { rightIcon() }
      </View>
    )
  }
}

/**
 * VtCell 类型声明
 */
VtCell.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  to: PropTypes.string,
  preIcon: PropTypes.string,
  arrowIcon: PropTypes.string,
  large: PropTypes.string,
  border: PropTypes.bool,
  center: PropTypes.bool,
  isLink: PropTypes.bool,
  slotIcon: PropTypes.element,
  slotTitle: PropTypes.element,
  slotValue: PropTypes.element,
  slotLabel: PropTypes.element
} 

export default VtCell