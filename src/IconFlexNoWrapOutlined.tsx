import React from 'react'
import { IconProps } from './types'

export const IconFlexNoWrapOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-280v-400h240v400H40Zm320 0v-400h240v400H360Zm320 0v-400h240v400H680Zm-560-80h80v-240h-80v240Zm640 0h80v-240h-80v240Z" />
  </svg>
)
