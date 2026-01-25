import React from 'react'
import { IconProps } from './types.js'

export const IconWidthSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z" />
  </svg>
)
