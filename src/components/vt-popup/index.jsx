import React from 'react'
import { View } from '@tarojs/components'

import VtIcon from '@/components/vt-icon'
import VtOverflow from '@/components/vt-overflow'
import { CSSTransition } from 'react-transition-group'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import '@/styles/vt-popup.scss'

function VtPopUp (props) {
  const {
    customStyle,
    className,
    overlayClass,
    overlayStyle,
    children,
    overlay,
    show,
    zIndex,
    position,
    round,
    transition,
    closeIconPosition,
  } = props

  /**
   * overflow点击事件
   */
  const handelOverFlowClick = () => { 
    console.log('click overflow')
  }

  /**
   * 遮罩层
   */
  const renderOverlay = () => {
    if (overlay) {
      return (
        <VtOverflow 
          show={ show } 
          customStyle={ overlayStyle }
          className={ classNames([
            'vt-overflow-hidden',
            overlayClass,
          ]) }
          onClick={ handelOverFlowClick }
        />
      )
    }
  }

  /**
   * TODO: 关闭图标
   */
  const renderCloseIcon = () => {
    if (props.closeable)
    return (
      <VtIcon 
        className={ classNames([
          'vt-popup__close-icon',
          `vt-popup__close-icon--${closeIconPosition}`
        ]) }
        name="close_filled"
      />
    )
  }

  /**
   * Popup组件
   */
  const renderPopup = () => {
    return (
      show ? <View
        v-show={props.show}
        style={{
          zIndex,
          ...customStyle
        }}
        className={classNames(
          [
            `vt-popup`,
            `vt-popup--${position}`,
            round && `vt-popup--round`,
            className,
          ]
        )}
      >
      {renderCloseIcon()}
      <View className="vt-popup__body">
        { children }
      </View>
      </View> : null
    )
  }

  const renderTransition = () => {
    const name = position === 'center' ? 
      'vt-fade' : 
      `vt-popup-slide-${position}`;

    return (
      <CSSTransition
        in={true}
        timeout={1000}
        unmountOnExit
        classNames={ transition || name }
        appear={true}//开启第一次执行展示的样式
      >   
        {renderPopup()}
      </CSSTransition>
    )
  }
  
  return (
    <>
      { renderOverlay() }
      { renderTransition() }
    </>
  )
}

VtPopUp.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  children: PropTypes.element,
  show: PropTypes.bool, // 显示popup
  zIndex: PropTypes.oneOfType([ // zIndex层级
    PropTypes.string,
    PropTypes.number,
  ]),
  duration: PropTypes.oneOfType([ // 动画时长
    PropTypes.string,
    PropTypes.number,
  ]),
  overlayClass: PropTypes.string, // 遮罩样式
  overlayStyle: PropTypes.object, // 遮罩样式
  overlay: PropTypes.bool, // 是否显示遮罩
  lockScroll: PropTypes.bool, 
  lazyRender: PropTypes.bool, // 懒加载
  closeOnClickOverlay: PropTypes.bool, // 是否在点击遮罩层后关闭
  closeable: PropTypes.bool,
  round: PropTypes.bool,
  closeIconPosition: PropTypes.string,

}

VtPopUp.defaultProps = {
  show: true,
  overlay: true,
  zIndex: 2,
  position: 'center',
  lockScroll: true,
  lazyRender: true,
  closeOnClickOverlay: true,
  closeable: true,
  round: true,
  closeIconPosition: 'top-right'
}

export default VtPopUp
