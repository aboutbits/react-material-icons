import React from 'react'
import { IconProps } from './types'

const IconCameraFrontSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v-80h182l-44-44 56-56 140 140L394-60l-56-56 44-44H200Zm360 0v-80h200v80H560ZM200-280v-600h560v600H511L394-397 277-280h-77Zm80-154q48-23 98.5-34.5T480-480q51 0 101.5 11.5T680-434v-366H280v366Zm200-86q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)

export { IconCameraFrontSharpFilled as default }
