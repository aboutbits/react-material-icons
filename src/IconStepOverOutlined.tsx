import React from 'react'
import { IconProps } from './types'

const IconStepOverOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-200q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM163-480q14-119 104-199.5T479-760q73 0 135 29.5T720-650v-110h80v280H520v-80h168q-32-54-86.5-87T480-680q-88 0-155 57t-81 143h-81Z" />
  </svg>
)

export { IconStepOverOutlined as default }