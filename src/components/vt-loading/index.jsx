import { View } from '@tarojs/components'
import React, { Component } from 'react'
import VtIcon from '@/components/vt-icon'

import '@/styles/vt-loading.scss'

const VtLoading = Slot => {
  return class extends Component {
    render () {
      console.log(this.props)
      return <View className="vt-loading">
        <View className="vt-loading__panel">
          <VtIcon
            className="vt-loading__panel__icon"
            name="icon-icon-test56"
            size="20"
          />
        </View>
        <Slot { ...this.props } />
      </View>
    }
  }
}

export default VtLoading