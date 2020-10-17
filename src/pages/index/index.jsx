import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import VtLoading from '../../components/vt-loading'
import VtCellGroup from '@/components/vt-cell-group'
import VtCell from '@/components/vt-cell'
import VtRow from '@/components/vt-layout/vt-row'
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
        {/* <VtLoading></VtLoading> */}
        {/* <VtCellGroup title="111">
          <VtCell 
          title="MacBook Pro 16." large value="value" label="label">
          </VtCell>
        </VtCellGroup> */}
        <VtRow type="flex" justify="end">
          <View>1</View>
          <View>2</View>
          <View>3</View>
        </VtRow>
      </View>
    )
  }
}
