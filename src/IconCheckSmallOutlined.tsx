import React from 'react'
import { IconProps } from './types.js'

export const IconCheckSmallOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
  </svg>
)
