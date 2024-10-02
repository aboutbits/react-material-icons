import React from 'react'
import { IconProps } from './types'

export const IconIosSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-600v-80h80v80h-80Zm0 320v-240h80v240h-80Zm120 0v-400h240v400H280Zm80-80h80v-240h-80v240Zm200 80v-80h160v-80H560v-240h240v80H640v80h160v240H560Z" />
  </svg>
)
