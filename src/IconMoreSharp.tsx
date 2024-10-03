import React from 'react'
import { IconProps } from './types.js'

export const IconMoreSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-160 80-480l240-320h560v640H320ZM180-480l180 240h440v-480H360L180-480Zm310 0Zm-130 40h80v-80h-80v80Zm140 0h80v-80h-80v80Zm140 0h80v-80h-80v80Z" />
  </svg>
)
