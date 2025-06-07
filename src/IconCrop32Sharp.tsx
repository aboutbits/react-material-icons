import React from 'react'
import { IconProps } from './types.js'

export const IconCrop32Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-240v-480h720v480H120Zm80-80h560v-320H200v320Zm0 0v-320 320Z" />
  </svg>
)
