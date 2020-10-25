import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { CSSTransition } from 'react-transition-group';
import VtIcon from '@/components/vt-icon'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-toast.scss'

function VtToast (props) {
  const {
    className,
    customStyle,
    message,
    iconPrefix,
    type,
    icon,
    loadingType,
    transition,
    position
  } = props

  const Icon = () => {
    // message status
    const hasIcon = icon || type === 'success' || type === 'fail';
    if (hasIcon) {
      return (
        <VtIcon 
          className="vt-toast__icon"
          name={icon}
        />
        // <Icon
        //   class={bem('icon')}
        //   classPrefix={iconPrefix}
        //   name={icon || type}
        // />
      );
    }
    // loading status
    if (type === 'loading') {
      return <Loading class={bem('loading')} type={loadingType} />;
    }
  }
  
  const Message = () => {
    if (message) {
      return (<Text className="vt-toast__text">
        { message }
      </Text>)
    }
  }

  return (
    <View>
      
    <CSSTransition
      in={true}
      timeout={1000}
      unmountOnExit//执行完成后dom销毁
      classNames={transition}
      appear={true}//开启第一次执行展示的样式
    >   
      <View 
        style={ customStyle }
        className={
          classNames(
            'vt-toast',
            `vt-toast--${position}`,
            
          )
        }
      >
        { Icon() }
        { Message() }
      </View>
    </CSSTransition>
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
  icon: 'check',
  className: null,
  type: 'text',
  position: 'middle',
  transition: 'test',
  lockScroll: false,
  message: ''
}

export default VtToast 
