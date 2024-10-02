import React from 'react'
import { IconProps } from './types'

export const IconCombineColumnsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-480Zm240 0ZM120-120v-720h320v160h-80v-80H200v560h160v-80h80v160H120Zm400 0v-160h80v80h160v-560H600v80h-80v-160h320v720H520Zm-80-240v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
