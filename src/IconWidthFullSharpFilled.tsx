import React from 'react'
import { IconProps } from './types'

export const IconWidthFullSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-80h40v-480h-40v480Zm600 0h40v-480h-40v480Z" />
  </svg>
)
