import React, { useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import VtIcon from '@/components/vt-icon'
import VtTag from '@/components/vt-tag'
import VtButton from '@/components/vt-button'


import './index.scss'

export default function Demo() {

  const [list, setList] = useState([
    '基础组件',
    '表单组件',
    '反馈组件',
    '展示组件',
    '导航组件',
    '业务组件',
    '商城模板'
  ])

  const TitleDetail = (title) => {
    return (
      <View 
        className="home-panel__band"
      >
        <View className="home-panel__band__title">
          <Image 
            src="https://img.yzcdn.cn/vant/logo.png" 
            className="vant-logo"
          />
          Vant in Taro
          <VtTag type="primary" className="status-code">develop</VtTag>
        </View>
        <Text className="home-panel__band__label">
          能够在Taro<VtTag type="primary">v3.0</VtTag>Vant基础库，
          功能迭代更新中，进度可以查看工作日志和<VtTag type="warning">commit</VtTag>记录。
        </Text>
      </View>
    )
  }

  /**
   * 导航列表
   * @param { any } key 标识
   * @param { String } title 标题
   */
  const ComponentMenu = (key, title) => {
    return (
      <View
        key={key}
        className="home-panel__menu"
      >
        <View className="home-panel__menu__item">
          <Text>{ title }</Text>
          <VtIcon name="arrow_right" />
        </View>
      </View>
    )
  }

  return (
    <View className="home-panel">
      {TitleDetail()}
      {
        list.map(item => {
          return ComponentMenu(item, item)
        })
      }
    </View>
  )
}
