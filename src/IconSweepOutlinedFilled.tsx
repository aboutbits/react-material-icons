import React from 'react'
import { IconProps } from './types'

export const IconSweepOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-240v-80h240v80H400Zm-158 0L14-467.8 71-525l171 171 366.87-367L666-664 242-240Zm318-160v-80h240v80H560Zm160-160v-80h240v80H720Z" />
  </svg>
)
