import React from 'react'
import { IconProps } from './types'

export const IconBatteryAlertSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-80h240v-560H360v560Zm0 0h240-240Zm80-240h80v-240h-80v240Zm40 160q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Z" />
  </svg>
)
