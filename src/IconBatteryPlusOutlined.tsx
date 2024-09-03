import React from 'react'
import { IconProps } from './types'

const IconBatteryPlusOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160Zm-40 80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v280q-21 0-41 3.5T600-466v-254H360v560h94q8 23 19.5 43T501-80H320Zm320 0v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z" />
  </svg>
)

export { IconBatteryPlusOutlined as default }