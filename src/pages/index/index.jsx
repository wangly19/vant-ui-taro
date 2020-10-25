import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import VtButton from '../../components/vt-button'
import VtLoading from '../../components/vt-loading'
import VtCellGroup from '@/components/vt-cell-group'
import VtCell from '@/components/vt-cell'
import VtRow from '@/components/vt-layout/vt-row'
import VtCol from '@/components/vt-layout/vt-col'
import VtTag from '@/components/vt-tag'
import VtOverflow from '@/components/vt-overflow'
import VtToast from '@/components/vt-toast'
import VtCheckBox from '../../components/form/vt-checkbox'
import VtCheckBoxGroup from '../../components/form/vt-checkbox-group'
import VtPopUp from '../../components/vt-popup'
import './index.scss'

export default function Index() {

  const [state, setState] = useState([1, 3])
  const [check, setCheck] = useState(true)


    const onChange = (e) => {
      console.log('onChange,', e)
      setState(e)
    }

    return (
      <View className='start-panel'>
        
        {/* <VtCheckBox checked={ check } onChange={ setCheck }></VtCheckBox> */}
        <VtPopUp/>
        {/* <VtTag>标签</VtTag> */}
        {/* <VtOverflow>
          1111
        </VtOverflow> */}
        {/* <VtCheckBoxGroup value={state} onChange={onChange}>
          <VtCheckBox name={1} label="1"></VtCheckBox>
          <VtCheckBox name={2} label="1"></VtCheckBox>
          <VtCheckBox name={3} label="1"></VtCheckBox>
        </VtCheckBoxGroup> */}
        {/* <VtButton ghost type="primary"></VtButton> */}
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
