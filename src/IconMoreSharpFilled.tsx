import React from 'react'
import { IconProps } from './types.js'

export const IconMoreSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-160 80-480l240-320h560v640H320Zm40-280h80v-80h-80v80Zm140 0h80v-80h-80v80Zm140 0h80v-80h-80v80Z" />
  </svg>
)
