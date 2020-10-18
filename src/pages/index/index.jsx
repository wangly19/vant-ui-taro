import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import VtLoading from '../../components/vt-loading'
import VtCellGroup from '@/components/vt-cell-group'
import VtCell from '@/components/vt-cell'
import VtRow from '@/components/vt-layout/vt-row'
import VtCol from '@/components/vt-layout/vt-col'
import VtTag from '@/components/vt-tag'
import VtOverflow from '@/components/vt-overflow'
import './index.scss'

export default class Index extends Component {

  render () {
    return (
      <View className='start-panel'>
        {/* <VtTag>标签</VtTag> */}
        {/* <VtOverflow></VtOverflow> */}
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
        {/* <VtRow gutter="20">
          <VtCol span="8" customStyle={{
            background: 'red'
          }}>111</VtCol>
          <VtCol span="8" customStyle={{
            background: 'red'
          }}>111</VtCol>
          <VtCol span="8" customStyle={{
            background: 'red'
          }}>111</VtCol>
        </VtRow> */}
      </View>
    )
  }
}
