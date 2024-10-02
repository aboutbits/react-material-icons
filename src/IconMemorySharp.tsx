import React from 'react'
import { IconProps } from './types'

export const IconMemorySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80H200v-160h-80v-80h80v-80h-80v-80h80v-160h160v-80h80v80h80v-80h80v80h160v160h80v80h-80v80h80v80h-80v160H600v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z" />
  </svg>
)
