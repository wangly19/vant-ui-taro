import { pxTransform } from '@tarojs/taro'


export const pxToTransform = (px) => {
  const mod = pxTransform(px, 375)
  console.log(mod)
  return mod
}