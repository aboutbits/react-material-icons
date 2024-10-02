import React from 'react'
import { IconProps } from './types'

export const IconListAltCheckSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-560 454-85 191Zm-80 80v-720h720v400h-80v-320H200v560h280v80H120Zm574 40L552-222l57-56 85 85 170-170 56 57L694-80ZM440-440h240v-80H440v80Zm0-160h240v-80H440v80ZM280-440h80v-80h-80v80Zm0-160h80v-80h-80v80Z" />
  </svg>
)
