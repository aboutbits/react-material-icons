import React from 'react'
import { IconProps } from './types.js'

export const IconWidthWideSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-80h80v-480h-80v480Zm160 0h320v-480H320v480Zm400 0h80v-480h-80v480ZM320-720v480-480Z" />
  </svg>
)
