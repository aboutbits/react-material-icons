import React from 'react'
import { IconProps } from './types'

const IconBatteryPlusSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-80v-120H520v-80h120v-120h80v120h120v80H720v120h-80Zm-360 0v-720h120v-80h160v80h120v320q-8 0-16 .5t-16 1.5q-88 12-148 79t-60 159q0 45 16 86t45 74H280Z" />
  </svg>
)

export { IconBatteryPlusSharpFilled as default }
