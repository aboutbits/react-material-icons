import React from 'react'
import { IconProps } from './types'

const IconBatteryShareOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v120h-80v-80H360v560h240v-80h80v120q0 17-11.5 28.5T640-80H320Zm80-200v-120q0-33 23.5-56.5T480-480h167l-63-64 56-56 160 160-160 160-57-57 64-63H480v120h-80Z" />
  </svg>
)

export { IconBatteryShareOutlined as default }
