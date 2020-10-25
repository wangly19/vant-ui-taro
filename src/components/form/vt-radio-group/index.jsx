import React, { createContext, useContext } from 'react'
import { View } from '@tarojs/components'

import classNames from 'classnames'
import PropTypes from 'prop-types'

export const UserContext = createContext()


const inlineStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}


function VtCheckGroup ({
  className,
  customStyle = {},
  children,
  value,
  onChange,
  inline
}) {
  return (
    <View
      className={classNames([
        className
      ])}
      style={
        Object.assign(
          inline && inlineStyle,
          {
            ...customStyle
          }
        )
      }
    >
      <UserContext.Provider value={{ value, onChange }}>
        { children }
      </UserContext.Provider>
    </View>
  )
}

VtCheckGroup.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  inline: PropTypes.bool
}

VtCheckGroup.defaultProps = {
  inline: true
}

export default VtCheckGroup 
