import React, { useState, useEffect, useContext } from 'react'
import { View, Text } from '@tarojs/components'

import { CSSTransition } from 'react-transition-group';
import VtIcon from '@/components/vt-icon'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-checkbox.scss'

import { UserContext } from '../vt-radio-group'


function VtCheckBox (props) {
  const [isCheck, setIsCheck] = useState(false)

  const {
    className ,
    customStyle = {},
    checked,
    label,
    size,
    name
  } = props

  const context = useContext(UserContext)
  const isGroup = name && context
  useEffect(() => {
    // 是否是group模式，如果是group模式就判断name
    console.log('useEffect')
    if (isGroup) {
      const { value } = context
      setIsCheck(value.indexOf(name) !== -1)
    } else {
      setIsCheck(checked)
    }
  }, [context, checked])

  /**
   * 切换状态，并抛出事件
   */ 
  const onChangeCheckbox = () => {
    console.log(isCheck)
    if (isGroup) {
      const { value, onChange } = context
      let newValue = [].concat(value)
      if (isCheck) {
        newValue = value.filter(el => el !== name)
      } else {
        newValue.push(name)
      }
      onChange(newValue)
    } else {
      props.onChange(!isCheck)
    }
  }

  const Label = () => {
    return(
      <Text className="v-checkbox__label">
        { label }
      </Text>
    )
  }

  const getIcon = () => {
    return (
      <CSSTransition
        in={true}
        timeout={1000}
        unmountOnExit//执行完成后dom销毁
        classNames="fade"
        appear={true}//开启第一次执行展示的样式
      >   
        <View 
          className={
            classNames([
              'vt-checkbox__icon',
              isCheck && 'vt-checkbox__icon--checked',
            ])
          }
        >
          <VtIcon
            className="vt-checkbox__icon-fix"
            name="benefits"
            size={ size } />
        </View>
      </CSSTransition>
    )
  }

  return (
    <View 
      style={customStyle}
      className={classNames([
        `vt-checkbox`,
        className
      ])}
      onClick={ onChangeCheckbox }
    >
      { getIcon() }
      { Label() }
    </View>
  )
}

VtCheckBox.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

VtCheckBox.defaultProps = {
  checked: false,
  size: 20
}

export default VtCheckBox 
