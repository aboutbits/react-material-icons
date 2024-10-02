import React from 'react'
import { IconProps } from './types'

export const IconOnHubDeviceSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80h320v80H320Zm0-120-47-600h414l-47 600H320Zm74-80h172l34-440H360l34 440Zm0-440h-34 240-206Z" />
  </svg>
)
