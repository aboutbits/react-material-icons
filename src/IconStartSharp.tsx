import React from 'react'
import { IconProps } from './types.js'

export const IconStartSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z" />
  </svg>
)
