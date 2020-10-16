import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import VtLoading from '../../components/vt-loading'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* <VtButton className="test">默认按钮</VtButton>
        <VtButton ghost type="primary">标准按钮</VtButton>
        <VtButton type="info">信息按钮</VtButton>
        <VtButton type="danger" block>错误按钮</VtButton> */}
        <VtLoading></VtLoading>
      </View>
    )
  }
}
