import React from 'react'
import { IconProps } from './types'

const IconTimer5ShutterOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v-120h240v-100H320v-340h360v120H440v100h120q50 0 85 35t35 85v100q0 50-35 85t-85 35H320Z" />
  </svg>
)

export { IconTimer5ShutterOutlined as default }
