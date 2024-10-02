import React from 'react'
import { IconProps } from './types'

export const IconDetectorBatterySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-200h320v-120H360v120Zm-160 80v-280h560v80h80v120h-80v80H200Zm0-640v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Zm-78-240v40-40Z" />
  </svg>
)
