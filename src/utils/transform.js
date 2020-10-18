import { pxTransform, getEnv } from '@tarojs/taro'


export const pxToTransform = (px) => {
  if (getEnv() === 'WEB') {
    return pxTransform(px, 375)
  }
  return pxTransform(px * 2)
}