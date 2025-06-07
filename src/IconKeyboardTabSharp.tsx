import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardTabSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-240v-480h80v480h-80Zm-320 0-57-56 144-144H80v-80h487L424-664l56-56 240 240-240 240Z" />
  </svg>
)
