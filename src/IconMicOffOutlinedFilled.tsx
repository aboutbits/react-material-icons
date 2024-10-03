import React from 'react'
import { IconProps } from './types.js'

export const IconMicOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m710-362-58-58q14-23 21-48t7-52h80q0 44-13 83.5T710-362ZM592-482 360-714v-46q0-50 35-85t85-35q50 0 85 35t35 85v240q0 11-2.5 20t-5.5 18ZM440-120v-124q-104-14-172-92.5T200-520h80q0 83 58.5 141.5T480-320q34 0 64.5-10.5T600-360l57 57q-29 23-63.5 38.5T520-244v124h-80Zm352 64L56-792l56-56 736 736-56 56Z" />
  </svg>
)
