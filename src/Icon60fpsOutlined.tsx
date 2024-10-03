import React from 'react'
import { IconProps } from './types.js'

export const Icon60fpsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200H200q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h200v120H200v80h120q50 0 85 35t35 85v120q0 50-35 85t-85 35ZM200-440v120h120v-120H200Zm400 120h160v-320H600v320Zm0 120q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h160q50 0 85 35t35 85v320q0 50-35 85t-85 35H600Z" />
  </svg>
)
